import React from 'react'

const Images = (props) => {
    return (
        <img 
            src={props.src}
            width={props.width}
            height={props.height}
        />
    )
}

export default Images
