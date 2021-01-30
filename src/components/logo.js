import React from 'react'
import { logo } from '../styles/sheets'

function Logo(props) {
	const logo = (
		<img
			style={props.style ? props.style : logo.default}
			src={props.image}
			alt='logo'
		/>
	)
	return logo
}

export default Logo
