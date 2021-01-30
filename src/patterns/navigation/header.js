import React from 'react'
import { Logo, Button, Link } from '../../components'

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
		<div>
			<Logo />
			{renderlinks}
			<Button />
		</div>
	)
}

export default Header
