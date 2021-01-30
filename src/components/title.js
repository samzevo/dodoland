import React from 'react'
import {Typography} from '../styles/base/'
 
function Title(props) {

    const renderTitleDefault =
    <p size="default" style={Typography.titleDefault}> 
        {props.children}
    </p>

    const renderTitleMedium=
    <p size="medium"  style={Typography.titleMedium}>
        {props.children}
    </p>
    const renderTitleLarge=
    <p size="large" style={Typography.titleLarge}>
        {props.children}
    </p>

    const renderTitle = (props) =>{
        {props.size === "medium" ? renderTitleMedium :renderTitleLarge}
    }

    return (
        <div>
            {props.size ? renderTitle :renderTitleDefault}
        </div>
    )
}

export default Title
