import React from 'react'
import { link } from '../styles/sheets/components'

function Link(props) {
	return (
		<a href={props.href} style={props.style ? props.style : link.default}>
			{props.children}
		</a>
	)
}

export default Link
