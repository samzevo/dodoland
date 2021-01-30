import React from 'react'
import { Section, Row, Container, Block } from '../../layouts'
import { section, row, container } from '../../styles/sheets/layouts'
import { Button } from '../../components'
import illustration from '../../assets/illustration.svg'

const Home = () => {
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
					<h1>Welcome to birdly</h1>
					<p>Collect and breed love birds forever and ever</p>
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
