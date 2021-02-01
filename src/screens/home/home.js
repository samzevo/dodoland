import React from 'react'
import { Section, Row, Container, Block } from '../../layouts'
import { section, row, container } from '../../styles/sheets/layouts'
import { Button } from '../../components'
import { Title, Text, Icon } from '../../components/'
import { button } from '../../styles/sheets/components/'
import illustration from '../../assets/illustration.svg'
import { Colors } from '../../styles/base'
import { Guide, Wallet, Instagram } from '../../assets/assets'


const Home = (props) => {
		

	return (
		<Section
			style={{
				...section.default,
				marginTop: '10vh',
				height: '60vh',
			}}>
			<Container
				style={{
					...container.default,
					justifyContent: 'space-around',
				}}>
				<Block>
					<Title color={Colors.primary} type='titleLarge'>
						Welcome to dodoland
					</Title>
					<Text type='textMedium'>
						Collect and breed love birds forever and ever
					</Text>
					<Text type='textMedium' color={Colors.white}>
						<span
							style={{ fontSize: 25, fontWeight: 'bold' }}>
							16.8k Birds
						</span>{' '}
						Burned through fees
					</Text>
					<Row
						style={{
							...row.default,
							justifyContent: 'flex-start',
							marginTop: '32px',
						}}>
						<Button
							type='primary'
							style={{
								...button.default,
								marginRight: '32px',
							}}
							>
							Get started
						</Button>
						<Button type='btnIcon'>
							{' '}
							<Icon
								src={Guide}
								style={{ marginRight: '12px' }}
							/>{' '}
							Guide
						</Button>
					</Row>
				</Block>
				<Block
					style={{
						...row.default,
					}}>
					<img style={{ width: '100%' }} src={illustration} />
				</Block>
			</Container>
		</Section>
	)
}

export default Home
