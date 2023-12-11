import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCartHandler = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove an item from the cart based on ID
  const removeFromCartHandler = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  const cartContext = {
    cartItems,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
