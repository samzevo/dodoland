import React ,{ useState,useEffect} from 'react'

import { Logo, Button, Link, Icon } from '../../components'
import logo from '../../assets/logos/logo.svg'
import { Row, Section, Container } from '../../layouts'

import { section } from '../../styles/sheets/layouts'
import { Links } from '../../data/data'
import { link as linkStyle } from '../../styles/sheets/components'
import { Wallet } from '../../assets/assets'


	const Web3 = require("web3");
	// const connectwallet = () => {  
		
	// }

	const connect = async() =>{
		if (window.ethereum) {   
			window.web3 = new Web3(window.ethereum);   
			window.ethereum.enable(); 
			const ethereum =window.ethereum;
			const accounts = await ethereum.request({ method: 'eth_accounts' }); 
			
			console.log(accounts);  
			return true; 
		}  
		return false;
	}
	// ethereum.isConnected(): boolean;

	

function Header(props) {
	const [isConnect,setIsConnect]=useState('CONNECT WALLET')

	const renderlinks = (
		<Row>
			{Links.map((link) => (
				<Link
					style={{ ...linkStyle.default, margin: '0px 16px' }}
					key={link.id}
					to={link.to}>
					{link.name}
				</Link>
			))}
		</Row>
	)
	

	const renderWebHeader = (
		<Section
			style={{
				...section.default,
				height: '10vh',
				position: 'fixed',
				top: 0,
				left: 0,
				justifyContent: 'space-around',
				alignItems: 'center',
			}}>
			<Logo src={logo} />
			{renderlinks}
			<Button type='btnIcon'
			onClick={connect}
			
			 >
				<Icon src={Wallet} style={{ marginRight: '12px' }} />
				{isConnect}
			</Button>
		</Section>
	)

	const renderMobileHeader = (
		<Section
			style={{
				...section.default,
				height: '10vh',
				position: 'fixed',
				top: 0,
				left: 0,
				justifyContent: 'space-around',
				alignItems: 'center',
			}}>
			<Logo src={logo} />
			<Button type='btnIcon'
			onClick={connect}
			
			>
				<Icon src={Wallet} style={{ marginRight: '12px' }} />
				Connect Wallet
			</Button>
			
		</Section>
	)

	return props.device === 'mobile' ? renderMobileHeader : renderWebHeader
}

export default Header
