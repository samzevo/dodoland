import React from 'react'

//importing pattern stylings
import '../../styles/patterns/navigations/sidebar.css'

//importing components
import { Link,Icon } from '../../components/'

import close from '../../assets/icons/close.svg'

const Sidebar = ({toggle}) => {
	return (
		<div className='sidebar'>
			<span className="close" onClick={toggle}><Icon src={close} /></span>
			<ul className='nav-menu-sidebar' onClick={toggle}>
				<Link
					name='Home'
					path='/'
					style={{ textDecoration: 'none',color:'black' }}
				/>
				<Link
					name='Birds'
					path='/birds'
					style={{ textDecoration: 'none',color:'black' }}
				/>
				<Link
					name='Shop'
					path='/shop'
					style={{ textDecoration: 'none',color:'black' }}
				/>
				<Link
					name='Nesting'
					path='/nesting'
					style={{ textDecoration: 'none',color:'black' }}
				/>
				<Link
					name='Earn'
					path='/earn'
					style={{ textDecoration: 'none',color:'black' }}
				/>
				<Link
					name='Feeding'
					path='/feeding'
					style={{ textDecoration: 'none',color:'black' }}
				/>
				<Link
					name='Upcoming'
					path='/upcoming'
					style={{ textDecoration: 'none',color:'black' }}
				/>
			</ul>
		</div>
	)
}

export default Sidebar
