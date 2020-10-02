import React from 'react';
import Styles from './Toolbar.module.css'
import Logo from '../Logo/Logo'
import Nav from '../NavigationItems/NavigationItems'

const Toolbar = (props) => (
    <header className={Styles.Toolbar}>
        <div className={Styles.DrawerToggle} onClick={props.openSideDrawer}>
        <div></div>
        <div></div>
        <div></div>
        </div>
        
        <div className = {Styles.Logo}>
            <Logo />
        </div>
        <nav className={Styles.nav}>
            <Nav />
        </nav>
    </header>
)
export default Toolbar;