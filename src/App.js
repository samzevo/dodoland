import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import  Button from './components/button';
import  Navbar from './patterns/navigation/navbar';

function App() {
  const style = {
    background : 'grey'
  }
  return (

    <div>
      <Router>
        <Navbar/>
      </Router>
      
      <Button text = 'Get Started'/>
      <Button text = 'Guide'/>
    </div>
      
  );
}

export default App;
