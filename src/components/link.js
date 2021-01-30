import React from 'react'
import {Link as ReactLink} from 'react-router-dom'

import { link } from '../styles/sheets/components'

function Link(props) {
	return (
		<ReactLink to={props.to} style={props.style ? props.style : link.default}>
			{props.children}
		</ReactLink>
	)
}

export default Link
