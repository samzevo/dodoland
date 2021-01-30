import React from 'react'
import { Logo, Button, Link } from '../../components'
import { Birdly_logo } from '../../assets'
import Section from '../../layouts/section'

function Header(props) {
	const renderlinks = (
		<div>
			<Link>Home</Link>
			<Link>Birds</Link>
		</div>
	)
	return (
		<Section>
			<Logo />
			{renderlinks}
			<Button />
		</Section>
	)
}

export default Header
