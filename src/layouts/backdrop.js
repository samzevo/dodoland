import React from 'react'

import {Background} from '../assets/'

const Backdrop = () => {
    const Style={
        width:'100vw',
        height:'auto',
        background:`url${Background}`,
    }
    return (
        <div style={Style}>
            
        </div>
    )
}

export default Backdrop
