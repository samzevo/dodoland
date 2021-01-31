import React from 'react'
import { Typography } from '../styles/base'

function Text(props) {
    
    const renderTextDefault =
    <p size="default" style={Typography.textDefault}> 
        {props.children}
    </p>

    const renderTextMedium=
    <p size="medium"  style={Typography.textMedium}>
        {props.children}
    </p>
    const renderTextLarge=
    <p size="large" style={Typography.textLarge}>
        {props.children}
    </p>
    const renderText = (props) =>  { 
        return<div>
             {props.size === "medium" ? renderTextMedium : renderTextLarge}
        </div>
        
    } 
    
    return (
        <div>

          {props.size ? renderText(props) : renderTextDefault }
            
        </div>
    )
}

export default Text
