import React from 'react'
import { button } from '../styles/sheets/components'

function Button(props) {
	const styles={
		primarybutton:{
			padding:'10px',
			backgroundColor:'white',
			borderRadius:'8px',
			zIndex:'1'
		}

	}
	return (
		<button
			href={props.href}
			style={props.style ? props.style : button.default}>
			{props.children}
		</button>
	)
}

export default Button
