import React from 'react'
import { Logo } from '../../components'
import { Open_sealogo, Facebook, Instagram, Twitter } from '../../assets/assets'
import { Section, Row, Container } from '../../layouts'
import { section } from '../../styles/sheets/layouts'

function Footer(props) {
	const renderSocialMediaIcons = (
		<Row>
			<Logo image={Facebook} />
			<Logo image={Instagram} />
			<Logo image={Twitter} />
		</Row>
	)

	return (
		<Section
			style={{
				...section.default,
				position: 'fixed',
				bottom: 0,
				left: 0,
				justifyContent: 'space-around',
				alignItems: 'center',
				margin: 32,
			}}>
			<Logo image={Open_sealogo} />
			{renderSocialMediaIcons}
		</Section>
	)
}

export default Footer
