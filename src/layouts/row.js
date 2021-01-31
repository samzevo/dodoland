import React from 'react'
import { row } from '../styles/sheets/layouts/'

const Row = (props) => {
	return (
		<div style={props.style ? props.style : row.default}>
			{props.children}
		</div>
	)
}

export default Row
