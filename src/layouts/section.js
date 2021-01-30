import React from 'react'
<<<<<<< HEAD
import Layout from '../styles/sheets/layouts'

const Section = (props) => {
	return (
		<div style={props.style ? props.style : Layout.sectionDefault}>
			{props.children}
		</div>
	)
=======
import {section} from '../styles/sheets/layouts/'
const Section = (props) => {
	return <div style={section.default}>{props.children}</div>
>>>>>>> 9eedb664f205fad879d6b322bc4387d6363162df
}

export default Section
