import React from 'react'

function Icon(props){

    return <img  src={props.src}
    style={props.style}
    onClick={props.onClick}
    alt="icon"/>
}

export default Icon