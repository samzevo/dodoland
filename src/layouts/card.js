import React from 'react'
import {card} from '../styles/sheets/layouts/'

const Card = (props) => {
    return (
        <div style={props.style ? props.style : card.default}>
            {props.children}
        </div>
    )
}

export default Card
