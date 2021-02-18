import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'

import Header from './patterns/navigations/header'
import Footer from './patterns/navigations/footer'
import Home from './screens/home'

function App() {

	return (
		<React.Fragment>
			<Router>
				<Header />
				<Switch>
					<Route path='/home' exact component={Home} />
					{/* <Route path='/birds' exact component={Birds} />
					<Route path='/shop' exact component={Shop} />
					<Route path='/nesting' exact component={Nesting} />
					<Route path='/earn' exact component={Earn} />
					<Route path='/feeding' exact component={Feeding} />
					<Route path='/upcoming' exact component={Upcoming} /> */}
				</Switch>
				<Footer />
			</Router>
		</React.Fragment>
	)
}

export default App
