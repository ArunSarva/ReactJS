import React, { Component } from 'react';
import Contact from '../P/Contact'
class Restfull_api extends Component {
     state ={
         Contact:[]
     };
    render() {
        return (
             <Contact hello ={this.state.Contact}/>                
        );
    }
    componentDidMount() {
        console.log("After Did mount")
        fetch('http://jsonplaceholder.typecode.com/user')
        .then (res=>res.json())
        .then((data) => {
            this.setState({Contact:data})
        })
        .catch(console.log)
    }
}

export default Restfull_api;