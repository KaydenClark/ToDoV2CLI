import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navi/navBar.js'
import Routes from './components/navi/routes'

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar/>
            <Routes/>
        </Router>
    </div>
  );
}

export default App;
