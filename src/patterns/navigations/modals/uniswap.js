import React from 'react'
import '../../../styles/patterns/navigations/modal.css'

import close from '../../../assets/icons/close.svg'
import { Button, Icon } from '../../../components'


const Uniswap = (props) => {
    return (
        <div className="modal"
        style={{
            top : props.popup ? '50%' : '-100%',
            opacity: props.popup ? '1' : '0',
        }}>
            uniswap
            <span className="close" onClick={props.closeModal} ><Icon src={close} /></span>
            <div>
                <Button variant="secondary">Button 1</Button>
                <Button variant="secondary">Button 2</Button>
                <Button variant="secondary">Button 3</Button>
                <Button  variant="secondary">Button 4</Button>
            </div>
        </div>
    )
}

export default Uniswap
