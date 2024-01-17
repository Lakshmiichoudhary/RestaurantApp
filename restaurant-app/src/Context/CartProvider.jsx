import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => {
      const existingCartItemIndex = prevItems.findIndex((prevItem) => prevItem.id === item.id);
  
      if (existingCartItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingCartItemIndex].amount += item.amount;
        return updatedItems;
      } else {
        const updatedItem = { ...item };
        return [...prevItems, updatedItem];
      }
    });
  
    setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price * item.amount);
  };
  


  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((prevItem) => prevItem.id === id);
      if (existingItem.amount === 1) {
        return prevItems.filter((prevItem) => prevItem.id !== id);
      } else {
        const updatedItems = prevItems.map((prevItem) =>
          prevItem.id === id ? { ...prevItem, amount: prevItem.amount - 1 } : prevItem
        );
        return updatedItems;
      }
    });

    setTotalAmount((prevTotalAmount) => prevTotalAmount - items.find((item) => item.id === id).price);
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;