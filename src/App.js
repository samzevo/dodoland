import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Footer } from './patterns/navigation'
import { Home, Earn, Feeding, Nesting, Shop, Upcoming, Birds } from './screens/'


function App() {
	const [device, setDevice] = React.useState()

	React.useEffect(() => {
		detectDevice()
	}, [])

	const style = {
		background: 'grey',
	}

	const detectDevice = () => {
		const width = window.innerWidth
		if (width <= 576) {
			setDevice('mobile')
		} else {
			setDevice('desktop')
		}
	}

	return (
		<React.Fragment>
			<Router>
				<Header device={device} />
				{/* <Backdrop/> */}
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/birds' exact component={Birds} />
					<Route path='/shop' exact component={Shop} />
					<Route path='/nesting' exact component={Nesting} />
					<Route path='/earn' exact component={Earn} />
					<Route path='/feeding' exact component={Feeding} />
					<Route path='/upcoming' exact component={Upcoming} />
				</Switch>
				<Footer />
			</Router>
		</React.Fragment>
	)
}

export default App
