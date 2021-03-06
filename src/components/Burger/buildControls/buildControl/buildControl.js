import React from 'react';
import Styles from './buildControl.module.css'

const BuildControl = (props) =>{
    return(
        <div className={Styles.BuildControl}>
        <div className={Styles.Label}>{props.label}</div>
        <button className={Styles.Less} 
                onClick={props.removed}
                disabled = {props.disabled} >Less</button>
                
        <button className={Styles.More} onClick={props.added}>More</button>
        </div>
        )
}

export default BuildControl;