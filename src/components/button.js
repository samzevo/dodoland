import React from 'react'
import { button } from '../styles/sheets/components'

function Button(props) {
	
	return (
		<button
			href={props.href}
			style={props.style ? props.style : button.default}>
			{props.children}
		</button>
	)
}

export default Button
