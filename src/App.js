import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
    
  );
}

export default App;
