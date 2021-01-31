import React from 'react'
import { button } from '../styles/sheets/components'
import {Icon} from '../components/'

function Button(props) {
	
	const renderPrimarybutton=<button
	href={props.href}
	style={props.style ? props.style : button.default}
	type={props.type}
	>
	{props.children}
	
    </button>

	const renderButtonIcon=<button
	href={props.href}
	type={props.type}
	style={props.style ? props.style : button.icon}>
		
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
