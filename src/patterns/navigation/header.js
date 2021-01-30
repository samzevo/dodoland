import React from 'react'

import { Logo, Button, Link } from '../../components'
import logo from '../../assets/logos/logo.svg'
import Section from '../../layouts/section'
import Row from '../../layouts/row'

import { section } from '../../styles/sheets/layouts'
import {Links} from '../../data/data'

function Header(props) {
	const renderlinks = (
		<div>
			{
				Links.map(link => (
					<Link key={link.id} to={link.to}>{link.name}</Link>
				))
			}
		</div>
	)
	return (
		<Section
			style={{
				...section.default,
				height: '10vh',
				position: 'absolute',
				marginLeft: '16px',
				marginRight: '16px',
			}}>
			<Row>
				<Logo src={logo} />
				{renderlinks}
				<Button />
			</Row>
		</Section>
	)
}

export default Header
