import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Footer } from './patterns/navigation'
import { Home, Earn, Feeding, Nesting, Shop, Upcoming, Birds } from './screens/'


function App() {
	const style = {
		background: 'grey',
	}
	return (
		<React.Fragment>
			<Router>
				<Header />
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
