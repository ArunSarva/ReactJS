import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import Signin from './Task1/Signin';
import Signup from './Task1/Signup';
import Dobs from './Task2/Dobs';
import Cities from './Task2/Cities';
import Names from './Task2/Names';
import Arithmetic from './Task3/Arithmetic'
import State_set from './P/State_set';
import Sample from './Sample';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Sample}></Route>
        <Route exact path="/Task1" component={Signin}></Route>
        <Route exact path="/Task2" component={Names}></Route>
        <Route exact path="/Task3" component={Arithmetic}></Route>
        <Route exact path="/ss" component={State_set}></Route>
      </Switch>
    </Router>
  );
}

export default App;
