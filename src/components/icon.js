import React from 'react'

const Icon = (props) => {

    const Styles={
        default:{
            cursor:'pointer',
            ...props.style
        }
    }
    return (
        <>
            <img src={props.src} alt="icon" width={props.width} height={props.height} style={Styles.default}/>
        </>
    )
}

export default Icon