import React from 'react'
import Input from '../UI/Input'
import './Form.css'

const Form = (props) => {
  return (
    <form className='form'>
        <Input label="Amount" input={{
            id: 'amount',
            type: 'number',
        }}/>
        <button>Add</button>
    </form>
  )
}

export default Form
