import React from 'react'
import { Logo } from '../../components'

function Footer(props) {
	const style={
		footer:{
			
		}
	}
	const renderSocialMediaIcons = (
		<div>
			<Logo />
			<Logo />
			<Logo />
		</div>
	)

	return (
		<div>
			<Logo />
			{renderSocialMediaIcons}
		</div>
	)
}

export default Footer
