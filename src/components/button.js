import React from 'react'
import '../styles/components/button.css'
import '../styles/screens/birds.css'


function Button(props) {

const renderPrimarybutton=<button
href={props.href}
value={props.value}
type={props.type}
onClick={props.onClick}
style={props.style}
className="button-default"
>
{props.children}

    </button>

    
const renderSecondarybutton=<button
href={props.href}
value={props.value}
type={props.type}
onClick={props.onClick}
style={props.style}
className="button-secondary"
>
{props.children}

    </button>

const renderButtonIcon=<button
href={props.href}
type={props.type}
onClick={props.onClick}
style={props.style}
className="button-icon"
>

{props.children}
</button>
return (
<div>
{props.variant === "primary" && renderPrimarybutton}
{props.variant ==="secondary" && renderSecondarybutton}
{props.variant ==="btnIcon" && renderButtonIcon}
</div>

)
}

export default Button
