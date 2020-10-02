import React from 'react'
import Logo from '../../Logo/Logo'
import Style from './sidedrawer.module.css'
import NavigationItems from '../../NavigationItems/NavigationItems'
import Backdrop from '../../../UI/Backdrop/Backdrop'
import Aux from '../../../../hoc/Auxillary'

const sidedrawer = (props) =>{
    let attachedClasses = [Style.sidedrawer,Style.Close]
    if(props.open){
        attachedClasses = [Style.sidedrawer,Style.Open]
    }

    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
        <div className={Style.Logo}>
            <Logo/>
        </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
       
    )
}

export default sidedrawer