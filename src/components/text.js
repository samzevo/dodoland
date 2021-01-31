import React from 'react'

const Text = (props) => {
    return (
        <>
            <p style={props.style}>{props.children}</p>
        </>
    )
}

export default Text
