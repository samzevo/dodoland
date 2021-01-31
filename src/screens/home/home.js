import React from 'react'
import { Section, Row, Container, Block } from '../../layouts'
import { section, row, container } from '../../styles/sheets/layouts'
import { Button } from '../../components'
import {Title,Text} from '../../components/'

import illustration from '../../assets/illustration.svg'
import { Colors } from '../../styles/base'

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
					<Title color={Colors.primary}>Welcome to birdly</Title>
					<Text >Collect and breed love birds forever and ever</Text>
					<Row
						style={{
							...row.default,
							margin: '16px',
							justifyContent: 'space-between',
						}}>
						<Button>Get started</Button>
						<Button>Guide</Button>
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
