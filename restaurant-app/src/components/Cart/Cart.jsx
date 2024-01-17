import { useContext } from 'react'
import './Cart.css'
import Modal from '../UI/Modal'
import CartContext from '../../Context/CartContext'
import CartItem from './CartItems'

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  

  const cartItems = (
    <ul className='cart'>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  
  return (
    <Modal  onClose={props.onClose}>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>Rs:{totalAmount}</span>
      </div>
      <div className='option'>
        <button className='close' onClick={props.onClose}>
          close
        </button>
        {hasItems && <button className='order'>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
