function Counter({ quantity, onIncrement, onDecrement }) {
  return (
    <secrtion className="counter">
      <button onClick={onDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={onIncrement}>+</button>
    </secrtion>
  );
}

export default Counter;
