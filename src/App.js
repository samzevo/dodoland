import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Header from './patterns/navigation/header';
import Home from './screens/home/home'
import Birds from './screens/birds/birds'
import Shop from './screens/shop/shop'
import Nesting from './screens/nesting/nesting'
import Earn from './screens/earn/earn'
import Feeding from './screens/feeding/feeding'
import Upcoming from './screens/upcoming/upcoming'


function App() {
	const style = {
		background: 'grey',
	}
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route to="/" exact component={Home}/>
					<Route to="/birds" exact component={Birds}/>
					<Route to="/shop" exact component={Shop}/>
					<Route to="/nesting" exact component={Nesting}/>
					<Route to="/earn" exact component={Earn}/>
					<Route to="/feeding" exact component={Feeding}/>
					<Route to="/upcoming" exact component={Upcoming}/>
				</Switch>
			</Router>
		</>
	)
}

export default App
