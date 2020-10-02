import React from 'react';
import Styles from './Backdrop.module.css'
const Backdrop = (props) =>{
    return (
        props.show ?  <div className={Styles.Backdrop} onClick={props.clicked}></div> : null
    )
}

export default Backdrop;