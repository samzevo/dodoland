import React from 'react'
import { sec } from '../styles/sheets/layouts'

const Section = (props) => {
	return (
		<div style={props.style ? props.style : Layout.sectionDefault}>
			{props.children}
		</div>
	)
}

export default Section
