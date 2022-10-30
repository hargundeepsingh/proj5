import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/mealsImage.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header=(props)=>{
  return <React.Fragment>
    <header className={classes.header}>
      <h1>Tomato</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='An image full of delicious food!!' />
    </div>
  </React.Fragment>

}

export default Header;
