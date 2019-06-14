import React, { Component } from 'react';
import Task5a from './Task5a';

class Task5 extends Component {
    state ={
        Task5a:'',
        Task5b:''

    };
   render() {
       return (
            <Task5a hello ={this.state.Task5a} hello1={this.state.Task5b}/>                
       );
   }
   componentDidMount() {
       console.log("After Did mount")
       fetch('https://api.github.com/users/KrunalLathiya')
       .then (res=>res.json())
       .then((data) => {
           this.setState({Task5a:data})
       })
       .catch(console.log)
       fetch('https://jsonplaceholder.typicode.com/posts/1')
       .then (result=>result.json())
       .then((data1) => {
           this.setState({Task5b:data1})
        //    console.log(this.state.Task5b)
       })
       .catch(console.log)
   }
}


export default Task5;