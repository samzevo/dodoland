import React from 'react';

function Logo(props){
    const logo  = (
        <img src = {props.image} alt = "logo"/>
    )
    return logo
}

export default Logo;