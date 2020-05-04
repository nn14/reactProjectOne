import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [          //array of JS Objects.
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name="Max" age="29"/>
        <Person name="Robb" age="23">My Hobbies: Fishing</Person>
        <Person name="Stephanie" age="20"/>
      </div>
    );
  }
}

export default App;
