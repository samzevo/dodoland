import React from 'react'

const Banner = (props) => {
	return (
		<img
			src={props.src}
			alt={props.alt}
			width={props.width}
			height={props.height}
			style={props.style}
			className={props.className}
		/>
	)
}

export default Banner