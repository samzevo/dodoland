import React from 'react'
import Layout from '../styles/sheets/layouts'

const Section = (props) => {
	return (
		<div style={props.style ? props.style : Layout.sectionDefault}>
			{props.children}
		</div>
	)
}

export default Section
