// import React from 'react';
// import React, { Component} from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './Signup.css';

class Signup extends Component{
  
  render(){
  return(
    <div className="App">
      <header className="App-header">
        <form>
          <h2>Sign Up</h2>
          <label>
            <h5>Name</h5>
            <input type="text" name="name" /><br></br>
            <h5>Email</h5>
            <input type="text" name="name" /><br></br>
            <h5>Password</h5>
            <input type="text" name="name" /><br></br>
            <h5>Conformation</h5>
            <input type="text" name="name" /><br></br>

          </label>
          <input className="button1" type="submit" value="Create my Account" /><br></br>

        </form>
      </header>
    </div>
    
  );
  }
}

export default Signup;
