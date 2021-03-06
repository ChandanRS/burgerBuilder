import React from 'react';
import Aux from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=> {
    return <li key={igKey}><span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]} </li>
    })
    
    return(
    <Aux>
        <h3>Your Order:</h3>
        <p>A Delicious burger with following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <h4>Total Price: {props.price}</h4>
        <p>Continue to Checkout?</p>
        <Button btnType={'Danger'} clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType={'Success'} clicked={props.purchaseContinued}>CONTINUE</Button>
        
    </Aux>
    )
    
}   

export default OrderSummary;