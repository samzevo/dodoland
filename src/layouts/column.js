import React from 'react'
import Layouts from '../styles/sheets/layouts'

const Column = (props) => {
    return (
        <div style={Layouts.column}>
            {props.children}           
        </div>
    )
}

export default Column
