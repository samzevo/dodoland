import React from 'react'
import '../screens/home/home.css'
import '../screens/birds/birds.css'

import { container } from '../styles/sheets/layouts/'

const Container = (props) => {
	return (
		<div style={props.style ? props.style : container.default}  className={props.className}>
			{props.children}
		</div>
	)
}

export default Container
