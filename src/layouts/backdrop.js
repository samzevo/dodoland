import React from 'react'

import { Background } from '../assets/'

const Backdrop = () => {
	const Style = {
		width: '100vw',
		height: 'auto',
		backgroundSize:'cover'
	}
	return <img style={Style} src={Background} />
}

export default Backdrop
