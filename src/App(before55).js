import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [          //array of JS Objects.
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {       
    //console.log('Was clicked!');
    //DON'T DO THIS: this.state.persons[0].name = "Maximilian"    ---   Cambia todo el array, tengo que volver a agregar los datos que no quiero reemplazar.
    this.setState( {persons: [          //array of JS Objects.
      {name: newName, age: 28},
      {name: 'Manu', age: 29},          
      {name: 'Stephanie', age: 27}
    ]
    } )
  }

  nameChangedHandle = (event) => {
    this.setState( {
      persons: [          //array of JS Objects.
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},    //the value the user entered in the input. 
        {name: 'Stephanie', age: 26}
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
            />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandle}
            >My Hobbies: Fishing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
            />
        </div>
      );
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
