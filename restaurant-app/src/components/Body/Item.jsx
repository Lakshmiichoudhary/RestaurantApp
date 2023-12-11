import React from 'react'
import './Item.css'
import Form from './Form'

const Item = (props) => {
  return (
    <li className='meal'>
        <div>
            <h2>{props.name}</h2>
            <div className='des'>{props.des}</div>
            <div className='price'>Rs:-{props.price}</div>
        </div>
        <div>
          <Form/>
        </div>
    </li>
  )
}

export default Item
