import React from 'react'



//importing components
import {Icon} from './index'

const Avatar = (props) => {
	return (
		<div className='avatar'>
				<Icon
					src={props.src}
					height={'100%'}
					width={'100%'}
				/>
				<div className='avatar-content'>
						<h3>{props.name}</h3>
						<p>{props.designation}</p>
						<p>{props.status}</p>
					</div>
				</div>
	)
}

export default Avatar
