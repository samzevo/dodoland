import React from 'react'
import { Logo } from '../../components'
import {container, section} from '../../styles/sheets/layouts/'
import {Section,Container,Column} from '../../layouts/' 
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
				<Container style={{
					...container.default,
					flexDirection:'row',
					margin:'0 60px'
				}}>
					<Column ><Logo src={Open_sealogo} /></Column>
			
					{renderSocialMediaIcons}
				</Container>
			
		</Section>
	)
}

export default Footer
