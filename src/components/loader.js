import React from 'react'

const Loader = (props) => {
	return (
		<img
			src={props.src}
			alt='cover'
			width={props.width ? props.width : '100%'}
			height={props.height ? props.height : '100%'}
		/>
	)
}

export default Loader
