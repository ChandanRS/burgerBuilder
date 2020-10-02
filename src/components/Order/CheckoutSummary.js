import React from 'react'
import Burger from '../../components/Burger/Burger'
import Button from '../../components/UI/Button/Button'
import Styles from './CheckoutSummary.module.css'


const checkoutSummary = (props) => {
    return(
        <div className={Styles.checkoutSummary}>
            <h1 className={Styles.CheckoutText}>Heres how your burger Looks like..!</h1>
            <Burger ingredients={props.ingredients} />
            <div className={Styles.buttons}>
                <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.checkoutContinued}>CONTNUE</Button>
            </div>
          
        </div>
    )
}

export default checkoutSummary