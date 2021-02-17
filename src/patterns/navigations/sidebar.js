import React from 'react'

//importing pattern stylings
import '../../styles/patterns/navigations/sidebar.css'

//importing components
import { Link } from '../../components/'

const Sidebar = ({toggle}) => {
	return (
		<div className='sidebar'>
			<ul className='nav-menu-sidebar' onClick={toggle}>
				<Link
					name='Home'
					path='/'
					style={{ textDecoration: 'none' }}
				/>
				<Link
					name='Products'
					path='/products'
					style={{ textDecoration: 'none' }}
				/>
				<Link
					name='Resources'
					path='/resources'
					style={{ textDecoration: 'none' }}
				/>
				<Link
					name='Pricings'
					path='/pricings'
					style={{ textDecoration: 'none' }}
				/>
				<Link
					name='Schedule'
					path='/schedule'
					style={{ textDecoration: 'none' }}
				/>
			</ul>
		</div>
	)
}

export default Sidebar
