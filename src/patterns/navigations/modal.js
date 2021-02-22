import React from 'react'

//importing modals
import Brd from './modals/brd'
import Uniswap from './modals/uniswap'

const Modal = (props) => {
	return (
		props.variant === 'brd' ? 
		<Brd popup={props.popup} closeModal={props.closeModal} /> :
		<Uniswap popup={props.popup} closeModal={props.closeModal} />
	);
}

export default Modal
