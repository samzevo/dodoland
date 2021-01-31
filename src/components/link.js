import React from 'react'
import {Link as ReactLink,NavLink} from 'react-router-dom'

import { link } from '../styles/sheets/components'
import './NavLink.css'

function Link(props) {
	return (
		<NavLink to={props.to} style={props.style ? props.style : link.default} activeClassName="active" exact>
			{props.children}
		</NavLink>
	)
}

export default Link
