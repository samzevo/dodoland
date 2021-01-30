import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Backdrop from './layouts/backdrop'

import Header from './patterns/navigation/header';
import {Home,Earn,Feeding,Nesting,Shop,Upcoming,Birds} from './screens/index'
import Footer from './patterns/navigation/footer';


function App() {
	const style = {
		background: 'grey',
	}
	return (
		<>
			<Router>
				<Header />
				<Backdrop />
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
