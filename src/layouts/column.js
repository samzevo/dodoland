import React from 'react'
import {column} from '../styles/sheets/layouts/'

const Column = (props) => {
    return (
        <div style={column.default}>
            {props.children}           
        </div>
    )
}

export default Column
