import React from 'react'
import '../../../styles/patterns/navigations/modal.css'

import close from '../../../assets/icons/close.svg'
import { Icon } from '../../../components'

const Brd = (props) => {
    return (
        <div className="modal"
        style={{
            top : props.popup ? '50%' : '-100%',
                opacity: props.popup ? '1' : '0',
        }}>
           brd
           <span className="close" onClick={props.closeModal} ><Icon src={close} /></span>
        </div>
    )
}

export default Brd
