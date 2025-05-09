import "../../Styles/OrderItem.css";

function OrderItem({ item, onAdd, onRemove }) {
  return (
    <section className="order-item-box">
      <p className="order-item__event-name">{item.name}</p>
      <section className="order-item__date">
        <p className="order-item__event-date">
          {item.when.date} kl {item.when.from} - {item.when.to}
        </p>
      </section>
      <section className="order-item__counter">
        <button className="counter-cell" onClick={() => onRemove(item.id)}>
          -
        </button>
        <span className="counter-cell">{item.quantity}</span>
        <button className="counter-cell" onClick={() => onAdd(item)}>
          +
        </button>
      </section>
    </section>
  );
}
export default OrderItem;
