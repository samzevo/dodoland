import React from 'react'
import Typography from '../styles/base/typography'

function Title(props) {
	const category = props.category ? props.category : 'text'
	const style = props.style

	const renderText = (
		<p style={Typography(props, category, style)}>{props.children}</p>
	)

	return renderText
}

export default Title
