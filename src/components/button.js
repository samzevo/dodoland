import React from 'react'
import Colors from '../styles/base/colors'

function Button(props) {
	const styles = {
		button: {
			width: '218.54px',
			height: '45px',
			background: 'white',
			borderRadius: '5px',
			border: 'none',
			color: Colors.primary,
			fontSize: '15px',
			fontWeight: '500',
			marginTop: '10px',
			marginBottom: '10px',
			marginLeft: '10px',
		},
		buttonOuter: {
			width: '218.54px',
			height: '45px',
			background: 'none',
			borderColor: Colors.primary,
			borderWidth: '2px',
			borderStyle: 'Solid',
			borderRadius: '5px',
			position: 'absolute',
			top: '2px',
		},
		buttonDiv: {
			position: 'relative',
			mariginTop: '100px',
		},
	}
	const button = (
		<div style={styles.buttonDiv}>
			<button style={styles.button}>
				{props.icon}
				{props.text}
			</button>
			<div style={styles.buttonOuter}></div>
		</div>
	)
	return button
}

export default Button
