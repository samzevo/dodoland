import React from 'react'

const Cover = (props) => {
	return (
		<>
		<img 
			src={props.src} 
			alt="icon" 
			width={props.width} 
			height={props.height} 
			style={props.style}
			className="cover"
		/>
	</>
	)
}

export default Cover
