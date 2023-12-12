import './CartItems.css'

const CartItem = (props) => {
  const price = typeof props.price === 'number' ? `$${props.price.toFixed(2)}` : ''; 
  return (
    <li className='cart-item'>
      <div>
        <h2>{props.name}</h2>
        <div className='box'>
          <span className='price'>{price}</span>
          <span className='amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;