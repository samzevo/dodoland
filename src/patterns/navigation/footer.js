import React from 'react'
import { Logo } from '../../components'
import { Open_sealogo, Facebook, Instagram, Twitter } from '../../assets/assets'
import { Row, Column,Conta } from '../../layouts/index'

function Footer(props) {
	const renderSocialMediaIcons = (
		<div>
			<Logo image={Facebook} />
			<Logo image={Instagram} />
			<Logo image={Twitter} />
		</div>
	)

	return (
		<Row>
				<Logo image={Open_sealogo} />
				{renderSocialMediaIcons}
		</Row>
	)
}

export default Footer
