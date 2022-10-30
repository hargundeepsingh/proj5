import React from 'react';
import classes from './Modal.module.css';

const Backdrop=(props)=>{
  return <div className={classes.backdrop} onClick={props.onClose}></div>

}

const ModalOverlay=(props)=>{
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const Modal=(props)=>{
  return <React.Fragment>
    <Backdrop onClose={props.onClose}/>                
    <ModalOverlay>{props.children}</ModalOverlay>   
  </React.Fragment>                         //used portals for bacdrop and modaloverlays using overlays id in index.html
}

export default Modal;
