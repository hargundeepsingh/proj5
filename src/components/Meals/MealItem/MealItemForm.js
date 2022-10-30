import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import React , {useRef,useState} from 'react';

const MealitemForm=(props)=>{
  const[isAmountValid,setIsAmountValid]=useState(true);
  const amountInputRef=useRef();

    const submitHandler=(event)=>{
      event.preventDefault();
    
    const enteredAmount= amountInputRef.current.value;
    const enteredAmountNumber= +enteredAmount;

    if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
      setIsAmountValid(false);
      return;
    
    }
      props.onAddToCart(enteredAmountNumber);

    }



  return <form className={classes.form} onSubmit={submitHandler}>
    <Input
    ref={amountInputRef} 
    label="Amount" input={{
      id:'amount_'+ props.id,
      type:'number',
      min:'1',
      max:'5',
      step:'1',
      defaultValue:'1'
    }} />
    <button>+ Add</button>
    {!isAmountValid && <p>Please Enter Valid Amount (1-5)</p>}
  </form>
}

export default MealitemForm;