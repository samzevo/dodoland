import Logo from './components/logo'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './components/button'
// import Navbar from './patterns/navigation/navbar'

import { logo } from './styles/sheets'
import Header from './patterns/navigation/header'
import Home from './screens/home'
function App() {
	const style = {
		background: 'grey',
	}
	return (
		<div >
			<Router>
			</Router>
			<Logo style={logo.default} />
			<Button text='Get Started' />
			<Button text='Guide' />
			<Home />
			<Header />
		</div>
	)
}

export default App
