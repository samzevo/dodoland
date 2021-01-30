import React from 'react'
import { Logo, Button, Link } from '../../components'
//import { button } from '../styles/sheets'

function Header(props) {
	const renderlinks = (
		<div>
			<Link>Home</Link>
			<Link>Birds</Link>
		</div>
	)
	return (
		<div>
			<Logo />
			{renderlinks}
			<Button />
		</div>
	)
}

export default Header
