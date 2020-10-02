import React from 'react'
import burgerLogo from '../../../assets/images/burger-logo.png'
import Styles from './Logo.module.css'

const Logo = (props) =>(
    <div className = {Styles.Logo}>
        <img src={burgerLogo} alt="MyBurger"/> 
    </div>
)

export default Logo