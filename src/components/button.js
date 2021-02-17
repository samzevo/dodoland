import React from 'react'
import '../styles/components/button.css'


function Button(props) {

const renderPrimarybutton=<button
href={props.href}
value={props.value}
type={props.type}
onClick={props.onClick}
className="button-default"
>
{props.children}

    </button>

const renderButtonIcon=<button
href={props.href}
type={props.type}
onClick={props.onClick}
className="button-icon"
>

{props.children}
</button>
return (
<div>
{props.variant === "primary" && renderPrimarybutton}
{props.variant ==="btnIcon" && renderButtonIcon}
</div>

)
}

export default Button
