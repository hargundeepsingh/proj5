import { useState } from 'react';
import classes from './Checkout.module.css';
// import useInput from '../../hooks/use-input';

// const isEmpty=value=>value.trim() === '';
// const fiveChars=value=>value.trim().length === 5;

const Checkout =(props)=>{

  const[enteredName,setEnteredName]=useState('');
  const[enteredAddress,setEnteredAddress]=useState('');
  const[enteredPostal,setEnteredPostal]=useState('');
  const[enteredCity,setEnteredCity]=useState('');
  // const[formValidity,setFormValidity]=useState({
  //     name:false,
  //     address:false,
  //     postal:false,
  //     city:false,
  // });
  // const[isTouched,setIsTouched]=useState({
  //     name:false,
  //     address:false,
  //     postal:false,
  //     city:false,
  // });

  const nameHandler=(event)=>{
    setEnteredName(event.target.value)
    // setIsTouched({
    //   name:true,
    //   address:false,
    //   postal:false,
    //   city:false,
    // })

  }
  const addressHandler=(event)=>{
    setEnteredAddress(event.target.value)
    // setIsTouched({
    //   name:false,
    //   address:true,
    //   postal:false,
    //   city:false,
    // })
  }
  const postalHandler=(event)=>{
    setEnteredPostal(event.target.value)
    // setIsTouched({
    //   name:false,
    //   address:false,
    //   postal:true,
    //   city:false,
    // })
  }
  const cityHandler=(event)=>{
    setEnteredCity(event.target.value)
    // setIsTouched({
    // //   name:false,
    // //   address:false,
    // //   postal:false,
    // //   city:true,
    // // })
  }
  //   const blurHandler=()=>{
  //         if(isTouched.name===true && isEmpty(enteredName)){

  //         }
  //   }





  

      const sumbitHandler=(event)=>{
        event.preventDefault();
      //   setIsTouched({
      //       name:true,
      //       address:true,
      //       postal:true,
      //       city:true,
      //     })

      //   if(isEmpty(enteredName)){
      //     setFormValidity.name=false;
      //     return;
      //   }
      //   if(isEmpty(enteredAddress)){
      //     setFormValidity.address=false;
      //     return;
      //   }
      //   if(isEmpty(enteredCity)){
      //     setFormValidity.city=false;
      //     return;
      //   }
      //   if(!fiveChars(enteredPostal)){
      //     setFormValidity.postal=false;
      //     return;
      //   }

      //     setFormValidity({
      //       name:true,
      //       address:true,
      //       postal:true,
      //       city:true,
      //     })

      //     setEnteredAddress('');
      //     setEnteredCity('');
      //     setEnteredName('');
      //     setEnteredPostal('');
      }


      // const nameIsInvalid=isEmpty(enteredName) && isTouched.name;
      // const addressIsInvalid=isEmpty(enteredAddress) && isTouched.address ;
      // const postalIsInvalid=fiveChars(enteredPostal) && isTouched.postal;
      // const cityIsInvalid=!isEmpty(enteredCity) && isTouched.city;

      // const nameInputClasses=nameIsInvalid ? ''



  return <form className={classes.form} onSubmit={sumbitHandler} >
    <div className={classes.control}>
      <label htmlFor='name'>Your Name</label>
      <input type="text" id='name' onChange={nameHandler}  value={enteredName} />
    </div>
    {/* {nameIsInvalid && <p>Name is Invalid</p>} */}

    <div className={classes.control}>
      <label htmlFor='address'>Address</label>
      <input type="text" id='address' onChange={addressHandler} value={enteredAddress} />
    </div>
    {/* {addressIsInvalid && <p>Address is Invalid</p>} */}

    <div className={classes.control}>
      <label htmlFor='postal'>Postal Code</label>
      <input type="text" id='postal' onChange={postalHandler} value={enteredPostal}/>
    </div>
    {/* {postalIsInvalid && <p>Postal is Invalid</p>} */}

    <div className={classes.control}>
      <label htmlFor='city'>City</label>
      <input type="text" id='city' onChange={cityHandler} value={enteredCity} />
    </div>
    {/* {cityIsInvalid && <p>City is Invalid</p>} */}

    <div className={classes.actions}>
    <button type='button' onClick={props.onCancel}>Cancel</button>
    <button className={classes.submit}>Confirm</button>
    </div>



  </form>
}


export default Checkout;
