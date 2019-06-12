import React, { Component } from 'react';
import City from './City';

class Cities extends Component {
	render() {
    return (
      <div>
        <City City="Mysore">Arun</City>
        <City City="Banglur">Abhi</City>
        <City City="Manglur">Sarva</City>
      </div>
    );
  }
}

export default Cities;