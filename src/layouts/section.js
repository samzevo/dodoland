import React from 'react'
import { section } from '../styles/sheets/layouts'

import '../screens/home/home.css'

const Section = (props) => {
	return (
		<div style={props.style ? props.style : section.default} className="section">
			{props.children}
		</div>
	)
}

export default Section
