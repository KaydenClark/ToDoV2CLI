import './App.css';
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
