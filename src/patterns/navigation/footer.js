import React from 'react'
import { Logo } from '../../components'
import {section} from '../../styles/sheets/layouts/'
import {Section,Container} from '../../layouts/' 
import { Row, Column,Conta } from '../../layouts/index'
import {Images} from '../../data/data'
import {Open_sealogo} from '../../assets/assets'
function Footer(props) {
	const renderSocialMediaIcons = (
		<div>
			{
				Images.map((image) =>(
					<Logo  key={image.id}
						src={image.src}
					/>
				))
			}
		</div>
	)

	return (
		<Section
			style={{
				...section.default,
				position: 'fixed',
				bottom: 0,
				left: 0,
				justifyContent: 'space-between',
				alignItems: 'center',
				margin: '32px 0',
			}}>
				<Container>
					<Column ><Logo src={Open_sealogo} /></Column>
			
					{renderSocialMediaIcons}
				</Container>
			
		</Section>
	)
}

export default Footer
