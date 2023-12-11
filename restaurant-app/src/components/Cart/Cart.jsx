import React from 'react';
import './Cart.css';
import Modal from '../UI/Modal';

function Cart(props) {
  const orderItems = [
    { id: "11", name: 'pizza', amount: 2, price: 100 },
  ];

  const itemsList = orderItems.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  return (
    <Modal>
      <ul className='cart'>
        {itemsList}
      </ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>100</span>
      </div>
      <div className='option'>
        <button className='close'>close</button>
        <button className='order'>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
