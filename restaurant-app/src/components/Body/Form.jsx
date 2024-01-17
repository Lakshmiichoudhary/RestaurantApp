import { useRef, useState } from 'react';
import Input from '../UI/Input';
import './Form.css';

const Form = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <Input 
        ref={amountInputRef}
        label='Amount' 
        input={{ 
          id: 'amount' + props.id,
          type: 'number',
          min:'1',
          max: '5',
          step: '1',
          defaultValue: '1' }} />
      <button>Add</button>
      {!amountIsValid && <h3>Enter a valid amount (1-5).</h3>}
    </form>
  );
};

export default Form;
