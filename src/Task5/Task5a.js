import React, { Component } from 'react';

const Task5a =({hello,hello1}) => {
    return(    
        <div>
            
            <center><h1>KrunalLathiya Detiles</h1></center>
            {   <div> 
                    <h1> {hello.name} </h1>
                    <h5> {hello.login}</h5>
                    <h5> {hello.id}</h5>
                    <h5> {hello.company}</h5>
                    <h5> {hello.blog}</h5>
                </div>
			}
			<center><h1>KrunalLathiya Detiles</h1></center>
            {   <div> 
                    <h1> {hello1.userId} </h1>
                    <h5> {hello1.id}</h5>
                    <h5> {hello1.title}</h5>
                    <h5> {hello1.body}</h5>
                </div>
            }
        </div>
    )
}

export default Task5a;