import { useCartStore } from "../Stores/CartStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import OrderItem from "../Components/Features/OrderItem";
import useTicketStore from "../Stores/TicketStore";
import "../Styles/OrderPage.css";

function OrderPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCartStore();
  const { setTicketData } = useTicketStore();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const sendOrder = async () => {
    return new Promise((resolve) => setTimeout(resolve, 500));
  };

  const handleCheckout = async () => {
    try {
      if (cart.length === 0) {
        setError("Du måste lägga till minst en biljett innan du kan beställa.");
        return;
      }
      const orderDetails = {
        id: generateTicketId(),
        cart,
        date: new Date().toLocaleString(),
        total: totalPrice,
      };

      await sendOrder(cart);
      setTicketData(orderDetails);
      navigate("/ticket", { state: { cart } });
      clearCart();
    } catch (error) {
      setError("Något gick fel vid beställningen. Försök igen.");
    }
  };

  const generateTicketId = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  return (
    <section className="order-page">
      <h1 className="page-title">Order</h1>
      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}

      <ul
        className="order-items"
        aria-label="Lista över varor i din beställning"
      >
        {cart.map((item) => (
          <li>
            <OrderItem
              key={item.id}
              item={item}
              onAdd={() => addToCart(item)}
              onRemove={() => removeFromCart(item.id)}
            />
          </li>
        ))}
      </ul>

      <section className="order-total">
        <p>Totalt värde på order</p>
        <span className="total-price">{totalPrice} sek</span>
      </section>

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
