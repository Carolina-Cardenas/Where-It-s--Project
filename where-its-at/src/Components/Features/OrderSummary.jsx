import { useCartStore } from "../../Stores/CartStore";

const OrderSummary = () => {
  const { cart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="order-summary">
      <span>Totalt värde på order</span>
      <h2>{total} sek</h2>
      <button className="checkout-button">Skicka order</button>
    </div>
  );
};

export default OrderSummary;
