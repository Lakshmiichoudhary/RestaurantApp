import CartIcon from "../Cart/CartIcon";
import './CartButton.css'

const CartButton = () => {
  return (
    <button className='button'>
      <span className='icon'>
        <CartIcon/>
      </span>
      <span>Add to Cart</span>
      <span className='badge'>3</span>
    </button>
  );
};

export default CartButton;