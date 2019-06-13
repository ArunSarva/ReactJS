import React, { Component } from 'react';

class Task4a extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:"Arun",
            name1:"ABC",
            name2:""
        }
        this.ChangeName=this.ChangeName.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange= (a) => {
        console.log('handle change called');
        this.setState({name1:a.target.value});
      }
      handleChange1= (a) => {
        console.log('handle change called');
        this.setState({name2:a.target.value});
      }
    ChangeName(){
        if(this.state.name=="Sarva"){
            this.setState({name:"Arun"});
        }
        else
        {
            this.setState({name:"Sarva"});
        }
        
    }
    render() {
        return (
            <div className="App-header">
                <h1>{this.state.name}</h1>
                <h1>{this.state.name1}</h1>
                <input type="text" value={this.state.name1} onChange={this.handleChange}/>
                <button id="button" onClick={this.ChangeName}>ChangeName</button>                
                <h1>{this.state.name2}</h1>
                <input type="text"  onChange={this.handleChange1}/>               
            </div>
        );
    }
}
export default Task4a;