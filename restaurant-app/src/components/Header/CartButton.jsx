import { useContext } from 'react';
import CartIcon from "../Cart/CartIcon";
import CartContext from '../../Context/CartContext';
import './CartButton.css'

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  
  return (
    <button className='button' onClick={props.onClick}>
      <span className='icon'>
        <CartIcon/>
      </span>
      <span >your Cart</span>
      <span className='item'>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;