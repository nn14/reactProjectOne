import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>             
            <input type="text" onChange={props.changed} value={props.name}/>   {/* this references to the method defined in App.js and passed as a property at the component */}    
        </div>
        
    )
};

export default person;