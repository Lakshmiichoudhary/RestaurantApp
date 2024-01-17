import React, { useContext } from 'react';
import './Item.css';
import Form from './Form';
import CartContext from '../../Context/CartContext';

const Item = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className='meal'>
      <div>
        <h2>{props.name}</h2>
        <div className='des'>{props.des}</div>
        <div className='price'>Rs:{props.price}</div>
      </div>
      <div>
        <Form id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Item;
