import React, {useState}from "react";
import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const[isCartShown,setIsCartShown]=useState(false);

  const cartShowHandler=()=>{
    setIsCartShown(true);
  }
  const cartHideHandler=()=>{
    setIsCartShown(false);
  }

  return (
  <CartProvider>
      
      <Header onShowCart={cartShowHandler} />
      {isCartShown && <Cart onClose={cartHideHandler}/>}
      <main>
        <Meals />
      </main>
  </CartProvider>
  );
}

export default App;
