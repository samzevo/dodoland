import React from 'react'

import { Logo, Button, Link ,Icon} from '../../components'
import logo from '../../assets/logos/logo.svg'
import { Row, Section, Container } from '../../layouts'

import { section } from '../../styles/sheets/layouts'
import { Links } from '../../data/data'
import { link as linkStyle } from '../../styles/sheets/components'
import { Wallet } from '../../assets/assets'

function Header(props) {
	const renderlinks = (
		<Row>
			{Links.map((link) => (
				<Link
					style={{ ...linkStyle.default, margin: '0px 16px' }}
					key={link.id}
					to={link.to}>
					{link.name}
				</Link>
			))}
		</Row>
	)
	return (
		<Section
			style={{
				...section.default,
				height: '10vh',
				position: 'fixed',
				top: 0,
				left: 0,
				justifyContent: 'space-around',
				alignItems: 'center',
			}}>
			<Logo src={logo} />
			{renderlinks}
			<Button type="btnIcon"><Icon src={Wallet} style={{marginRight:'12px'}}/>Connect Wallet</Button>
		</Section>
	)
}

export default Header
