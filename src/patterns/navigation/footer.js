import React from 'react'
import { Logo } from '../../components'
import { Open_sealogo, Facebook, Instagram, Twitter } from '../../assets/assets'
import { Row, Column,Conta } from '../../layouts/index'
import {Images} from '../../data/data'
function Footer(props) {
	const renderSocialMediaIcons = (
		<div>
			{
				Images.map((image) =>(
					<Logo key={image.id}
						src={image.src}
					/>
				))
			}
		</div>
	)

	return (
		<Row>
				<Logo image={Open_sealogo} />
				{renderSocialMediaIcons}
		</Row>
	)
}

export default Footer
