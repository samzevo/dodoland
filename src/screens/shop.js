import React, { useState } from 'react'
import '../styles/screens/shop.css'
import { Button } from '../components'
import Tab from '../patterns/cards/tab'
import Modal from '../patterns/navigations/modal'


const Shop = () => {

    const [popup,setPopup] = useState(false)
    const [modalVariant, setModalVariant] = useState()

    const closeModal = () => {
		setPopup(false)
	}

    function brdHandler() {
		setModalVariant('brd')
		setPopup(true)
	}

	function uniswapHandler() {
		setModalVariant('uniswap')
		setPopup(true)
	}

    return (
        <div className="shop">
            <Tab tab1="Birds" tab2="Grains" />
            <div className="shop-button">
                <Button variant="primary" onClick={() => {brdHandler()}} >Buy BRD</Button>
                <Button variant="primary" onClick={() => {uniswapHandler()}}>Buy UniswapLP tokens</Button>
            </div>
            {popup ? <div className='backdrop'></div> : null}
			<Modal
				variant={modalVariant}
				popup={popup}
				closeModal={closeModal}
			/>
        </div>
    )
}

export default Shop
