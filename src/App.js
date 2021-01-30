import Logo from './components/logo'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './components/button'
import Navbar from './patterns/navigation/navbar'

import { logo } from './styles/sheets'

function App() {
	const style = {
		background: 'grey',
	}
	return (
		<div>
			<Router>
				<Navbar />
			</Router>
			<Logo style={logo.default} />
			<Button text='Get Started' />
			<Button text='Guide' />
		</div>
	)
}

export default App
