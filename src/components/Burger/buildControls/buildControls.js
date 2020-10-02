import React from 'react';
import Styles from './buildControls.module.css'
import BuildControl from './buildControl/buildControl'

const controls = [
    {label : 'Salad', type : 'salad'},
    {label : 'Bacon', type : 'bacon'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Meat', type : 'meat'}
]

const BuildControls = (props) =>{
    return(
        <div className={Styles.BuildControls}>
            <p>Current Price:<strong>{props.price}</strong> </p>
            {

            controls.map(ctrl => (
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added = {()=>props.ingredientAdded(ctrl.type)}
                removed = {()=>props.ingredientRemoved(ctrl.type)}
                disabled  = {props.disabled[ctrl.type]}
                />
            ))
            }
            <button className={Styles.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            >ORDER NOW</button>
        </div>
    )
}

export default BuildControls;