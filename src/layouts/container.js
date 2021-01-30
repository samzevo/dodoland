import React from 'react'

import { container } from '../styles/sheets/layouts/'

const Container = (props) => {
	return <div style={container.default}>{props.children}</div>
}

export default Container
