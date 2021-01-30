import React from 'react'

import { Logo, Button, Link } from '../../components'
import { Birdly_logo } from '../../assets'
import Section from '../../layouts/section'
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
		<Section>
			<Logo />
			{renderlinks}
			<Button />
		</Section>
	)
}

export default Header
