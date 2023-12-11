import CartIcon from "../Cart/CartIcon";
import './CartButton.css'

const CartButton = (props) => {
  return (
    <button className='button' onClick={props.onClick}>
      <span className='icon'>
        <CartIcon/>
      </span>
      <span>Add to Cart</span>
      <span className='item'>0</span>
    </button>
  );
};

export default CartButton;