import React from 'react';

const City =(props) => {
    return (<div> Name : {props.children} | City : {props.City}</div>
    )
}

export default City;