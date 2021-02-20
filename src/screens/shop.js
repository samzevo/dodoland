import React from 'react'
import '../styles/screens/shop.css'
import { Button } from '../components'
import Tab from '../patterns/cards/tab'


const Shop = () => {
    return (
        <div className="shop">
            <Tab tab1="Birds" tab2="Grains" />
            <div className="shop-button">
                <Button variant="primary">Buy BRD</Button>
                <Button variant="primary">Buy UniswapLP tokens</Button>
            </div>
        </div>
    )
}

export default Shop
