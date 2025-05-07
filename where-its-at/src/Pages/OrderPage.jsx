import { useCartStore } from "../Stores/CartStore";
import { useState } from "react";
import OrderItem from "../Components/Features/OrderItem";
import "../Styles/OrderPage.css";

function OrderPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCartStore();
  const [error, setError] = useState("");
  console.log("🛒 Cart:", cart);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      setError("Din varukorg är tom.");
      return;
    }
    alert(`Du skickade en order på ${totalPrice} sek!`);
    clearCart();
    setError("");
  };

  return (
    <section className="order-page">
      <h1 className="page-title">Order</h1>
      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}

      {/* Lista de productos en el carrito */}
      <div className="order-items">
        {cart.map((item) => (
          <OrderItem
            key={item.id}
            item={item}
            onAdd={() => addToCart(item)}
            onRemove={() => removeFromCart(item.id)}
          />
        ))}
      </div>

      {/* Sección del total del pedido */}
      <section className="order-total">
        <p>Totalt värde på order</p>
        <div className="total-price">{totalPrice} sek</div>
      </section>

      {/* Botón de envío */}
      <button
        className="checkout-button"
        onClick={handleCheckout}
        aria-label="Bekräfta och skicka din beställning"
      >
        Skicka order
      </button>
    </section>
  );
}

export default OrderPage;
