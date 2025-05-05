import { useCartStore } from "../Stores/CartStore";
import Counter from "../Components/UI/Counter";
import OrderSummary from "../Components/Features/OrderSummary";
import "../Styles/OrderPage.css";

function OrderPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCartStore();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Din varukorg är tom.");
      return;
    }

    alert(`Du skickade en order på ${totalPrice} sek!`);

    clearCart();
  };

  return (
    <section className="order-page">
      <h1 className="page-title">Order</h1>

      {cart.map((item) => (
        <OrderSummary
          key={item.id}
          name={item.name}
          date={`${item.when.date} kl ${item.when.from} - ${item.when.to}`}
          quantity={item.quantity}
          onAdd={() => addToCart(item)}
          onRemove={() => removeFromCart(item.id)}
        />
      ))}

      <section className="order-total">
        <p>Totalt värde på order</p>
        <div className="total-price">{totalPrice} sek</div>
      </section>

      <button className="checkout-button" onClick={handleCheckout}>
        Skicka order
      </button>
    </section>
  );
}

export default OrderPage;
