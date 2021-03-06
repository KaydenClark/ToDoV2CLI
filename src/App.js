import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navi/navBar.js'
import Routes from './Pages/routes'


function App() {

    return (
      <div className="App">
        <NavBar/>
        <Router>
          <Routes/>
        </Router>
      </div>
    ) //Return
} //App

export default App
