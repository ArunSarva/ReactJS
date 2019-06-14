import React, { Component } from 'react';

const Contact =({hello}) => {
    return(    
        <div>
            <h1>List</h1>
            {hello.map((display) =>(
                <div> 
                    <h1> {display.title} </h1>
                </div>
            ))}
        </div>
    )
}

export default Contact;