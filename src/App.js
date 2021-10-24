import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//20211025
import Home from "./components/pages/Home"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Router>
    
  );
}

export default App;
