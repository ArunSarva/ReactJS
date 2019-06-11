import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Signin from './Signin';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signin}></Route>
        <Route exact path="/signup" component={Signup}></Route>
      </Switch>
    </Router>
  );
}

export default App;
