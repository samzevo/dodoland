import React,{ useState } from 'react'

import Sidebar from './sidebar'
import { Logo, Button, Link, Icon } from '../../components'
import logo from '../../assets/logos/logo.svg'
import { Row, Section, Container } from '../../layouts'

import { section } from '../../styles/sheets/layouts'
import { Links } from '../../data/data'
import { link as linkStyle } from '../../styles/sheets/components'
import { Wallet,Hamburger } from '../../assets/assets'

function Header(props) {

	const [active,setActive]=useState(false)

	const menu = () => {
		setActive(!active)
	}
	
	const renderlinks = (
		<Row>
			{Links.map((link) => (
				<Link
					style={{ ...linkStyle.default, margin: '0px 16px',color:'white'}}
					activeClassName="webactive"
					key={link.id}
					to={link.to}>
					{link.name}
				</Link>
			))}
		</Row>
	)

	const renderWebHeader = (
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
			<Button type='btnIcon'>
				<Icon src={Wallet} style={{ marginRight: '12px' }} />
				Connect Wallet
			</Button>
		</Section>
	)

	const renderMobileHeader = (
		<>
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
			<Logo src={logo} style={{width:'140px'}}/>
			<Button type="primary">
				Connect Wallet
			</Button>
			{
				!active?<Icon src={Hamburger} onClick={menu}/>: <Icon src={Hamburger} />
			}
		</Section>
		{
			active?<Sidebar menu={menu}/> : null
		}
		</>
	)

	return props.device === 'mobile' ? renderMobileHeader : renderWebHeader
}

export default Header
