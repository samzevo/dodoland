import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Header from './patterns/navigation/header';
import Home from './screens/home/home'
import Birds from './screens/birds/birds'
import Shop from './screens/shop/shop'
import Nesting from './screens/nesting/nesting'
import Earn from './screens/earn/earn'
import Feeding from './screens/feeding/feeding'
import Upcoming from './screens/upcoming/upcoming'
import Footer from './patterns/navigation/footer';


function App() {
	const style = {
		background: 'grey',
	}
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/birds" exact component={Birds}/>
					<Route path="/shop" exact component={Shop}/>
					<Route path="/nesting" exact component={Nesting}/>
					<Route path="/earn" exact component={Earn}/>
					<Route path="/feeding" exact component={Feeding}/>
					<Route path="/upcoming" exact component={Upcoming}/>
				</Switch>
				<Footer />
			</Router>
		</>
	)
}

export default App
