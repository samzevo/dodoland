import React from 'react'
import { Logo } from '../../components'
import Row from '../../layouts/row'
import{Open_sealogo,Facebook,Instagram,Twitter} from '../../assets/assets'
import Column from '../../layouts/column'

function Footer(props) {
	
	const renderSocialMediaIcons = (
		<div>
			<Logo image={Facebook}/>
			<Logo image={Instagram}/>
			<Logo image={Twitter}/>
		</div>
	)

	return (
		<Row>
			<Column>
			<span>Buy on</span>
			<Logo image={Open_sealogo}/>
			</Column>
			
			{renderSocialMediaIcons}
		</Row>
	)
}

export default Footer
