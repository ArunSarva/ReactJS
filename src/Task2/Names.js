import React, { Component } from 'react';
import Name from './Name';
import Cities from './Cities';
import Dobs from './Dobs';
import '../App.css';

class Names extends Component {
	render() {
    return (
      <div className="App-header">
        <Name age="25">arun</Name>
        <Name age="23">Abhi</Name>
        <Name age="26">Sarva</Name>
        <br></br>
        <Dobs/><br></br>
        <Cities/>
      </div>
    );
  }
}

export default Names;