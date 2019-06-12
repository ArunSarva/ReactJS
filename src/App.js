import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import Signin from './Task1/Signin';
import Signup from './Task1/Signup';
import Dobs from './Task2/Dobs';
import Cities from './Task2/Cities';
import Names from './Task2/Names';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Task1" component={Signin}></Route>
        <Route exact path="/Task2" component={Names}></Route>
      </Switch>
    </Router>
  );
}

export default App;
