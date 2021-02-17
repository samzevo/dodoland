import React from 'react'



//importing components
import Icon from './icon'

const Input = (props) => {

	const renderInput=(
		<input 
				type={props.type}
				placeholder={props.placeholder}
				style={props.style}
		/>
	)
	const renderIconInput=(
		<div className="input-field" style={{width:`${props.length}px`}}>
			<span>
				<Icon src={props.src} width={20} height={20} style={props.iconStyle}/>
			</span>
			<input 
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	)
	return props.category==="icon" ? renderIconInput : renderInput
}

export default Input
