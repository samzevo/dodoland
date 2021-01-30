import React from 'react'
import { Logo } from '../../components'
import { Open_sealogo, Facebook, Instagram, Twitter } from '../../assets/assets'
<<<<<<< HEAD
import { Row, Column,Container } from '../../layouts/index'
=======
import { Section, Row, Container } from '../../layouts'
import { section } from '../../styles/sheets/layouts'
>>>>>>> d7ec33812168a07da8814857fe20b02fad98d93c

function Footer(props) {
	const renderSocialMediaIcons = (
		<Row>
			<Logo image={Facebook} />
			<Logo image={Instagram} />
			<Logo image={Twitter} />
		</Row>
	)

	return (
<<<<<<< HEAD
		<Container>
				<Logo image={Open_sealogo} />
				{renderSocialMediaIcons}
		</Container>
=======
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
>>>>>>> d7ec33812168a07da8814857fe20b02fad98d93c
	)
}

export default Footer
