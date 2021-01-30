import React from 'react'

import { Background } from '../assets/'

const Backdrop = () => {
	const Style = {
		width: '100vw',
		height: 'auto',
	}
	return (
		<div style={Style}>
			<img src={Background} />
		</div>
	)
}

export default Backdrop
