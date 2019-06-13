import React, { Component } from 'react';
import Sample from './Sample'

class Samples extends Component {
    ChangeName(){
        Sample.Sname="Ravana";
    }
    handleChange1= (a) => {
        console.log('handle change called');
        this.setState({name2:a.target.value});
      }
    render() {
        return (
            <div className="App-header">
                <Sample Sname="Sarva">Arun</Sample>
                <input type="text"  onChange={this.handleChange1}/>
                <button id="button" onClick={this.ChangeName}>ChangeName</button>
            </div>
        );
    }
}

export default Samples;