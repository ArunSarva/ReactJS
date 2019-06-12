import React, { Component } from 'react';
import Dob from './Dob';

class Dobs extends Component {
	render() {
    return (
      <div>
        <Dob Dob="28-02-1993">Arun</Dob>
        <Dob Dob="02-10-1994">Abhi</Dob>
        <Dob Dob="23-03-1993">Sarva</Dob>
      </div>
    );
  }
}

export default Dobs;