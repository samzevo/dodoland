import React from 'react'
import { button } from '../styles/sheets/components'


function Button(props) {
	
	const renderPrimarybutton=<button
	href={props.href}
	value={props.value}
	style={props.style ? props.style : button.default}
	type={props.type}
	onClick={props.onClick}
	>
	{props.children}
	
    </button>

	const renderButtonIcon=<button
	href={props.href}
	type={props.type}
	style={props.style ? props.style : button.icon}
	onClick={props.onClick}
	>
		
	{props.children}
	</button>
	return (
		<div>
			{props.type === "primary" && renderPrimarybutton}
			{props.type ==="btnIcon" && renderButtonIcon}
		</div>
		
	)
}

export default Button
