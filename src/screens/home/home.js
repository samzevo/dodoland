import React from 'react'
import { Section, Row, Container, Block } from '../../layouts'
import { section } from '../../styles/sheets/layouts'
import { Button } from '../../components'
import {Title,Text} from '../../components/'


const Home = () => {
	return (
		<Section
			style={{
				...section.default,
				marginTop: '10vh',
				height: '60vh',
			}}>
			<Container>
				<Block>
					<Title size="large">Welcome to birdly</Title>
					<p>Collect and breed love birds forever and ever</p>
					<Row>
						<Button>Get started</Button>
						<Button>Guide</Button>
					</Row>
				</Block>
				<Block>
					<h1>Welcome to birdly</h1>
					<p>Collect and breed love birds forever and ever</p>
					<Row>
						<Button>Get started</Button>
						<Button>Guide</Button>
					</Row>
				</Block>
			</Container>
		</Section>
	)
}

export default Home
