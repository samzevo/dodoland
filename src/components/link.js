import React from 'react'

//importing stylings
import '../index.css'

import { Link as ReactLink } from 'react-router-dom'

const Link = (props) => {
	return (
		<ReactLink id={'link'} to={props.path} style={props.style}>
			{props.name}
		</ReactLink>
	)
}

export default Link
