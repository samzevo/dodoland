
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './screens/home/home'


function App() {
	const style = {
		background: 'grey',
	}
	return (
		<div >
			<Router>
				<Home />
			</Router>
			
		</div>
	)
}

export default App
