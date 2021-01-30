import React from 'react'

import Row from '../../layouts/row'
import { Logo, Button, Link } from '../../components'
import {Birdly_logo} from '../../assets'

function Header(props) {
	const renderlinks = (
		<div>
			<Link href="/">Home</Link>
			<Link href="/birds">Birds</Link>
			<Link href="/shop">Shop</Link>
			<Link href="/nesting">Nesting</Link>
			<Link href="/earn">Earn</Link>
			<Link href="/feeding">Feeding</Link>
			<Link href="/upcoming">Upcoming</Link>
		</div>
	)
	return (
		<Row>
			<Logo image={Birdly_logo} />
			{renderlinks}
			<Button />
		</Row>
	)
}

export default Header
