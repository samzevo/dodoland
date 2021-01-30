import React from 'react'
import { Logo, Button, Link } from '../../components'
import { Birdly_logo } from '../../assets'
import Section from '../../layouts/section'
import Row from '../../layouts/row'

import { section } from '../../styles/sheets/layouts'

function Header(props) {
	const renderlinks = (
		<div>
			<Link>Home</Link>
			<Link>Birds</Link>
		</div>
	)
	return (
		<Section style={{ ...section.default, height: '10vh' }}>
			<Row>
				<Logo />
				{renderlinks}
				<Button />
			</Row>
		</Section>
	)
}

export default Header
