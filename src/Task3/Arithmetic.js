import React, { Component } from 'react';
// import '../App.css'

class Arithmetic extends Component {
    constructor(props) {
        super(props);
        this.state ={
            num:10,
        }
    }
    Addition= () => {
        this.setState({num:this.state.num+5});        
      }
      Subtraction= () => {
          if(this.state.num>=5){
            this.setState({num:this.state.num-5});
          }
          else{
              alert("Subtraction can't be performed ")
          }
                
      }
      Multiplication= () => {
        if(this.state.num>=1){
        this.setState({num:this.state.num*5});
        }        
        else{
            alert("Multiplication can't be performed ")
        }
      }
    render() {
        return (
            <div className="App-header">
                <h1>The number is : {this.state.num}</h1>
                <button id="button" onClick={this.Addition}>Addition</button><br></br>
                <button id="button" onClick={this.Subtraction}>Subtraction</button><br></br>
                <button id="button" onClick={this.Multiplication}>Multiplication</button>
            </div>
        );
    }
}

export default Arithmetic;