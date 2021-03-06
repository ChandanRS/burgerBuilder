import React from 'react';
import Style from './Modal.module.css';
import Aux from '../../../hoc/Auxillary'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) =>(
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={Style.Modal}
            style={{
                transform: props.show ? 'transformY(0)' : 'transformY(-100vh)',
                opacity : props.show ? '1' : '0'
            }}>
        {props.children}
        </div>
    </Aux>
    
)

export default Modal;