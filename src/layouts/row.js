import React from 'react'
import Layouts from '../styles/sheets/layouts/'

const Row = (props) => {
    return (
        <div style={Layouts.row}>
            {props.children}
        </div>
    )
}

export default Row
