import React, { Component } from "react";
import Person from "./Persons";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    console.log("[mainComponent.js] constructor");
  }
  state = {
    persons: [
      { id: "1", name: "James", age: 29 },
      { id: "2", name: "Raju", age: 28 },
      { id: "3", name: "Bheem", age: 27 },
    ],
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[MainComponnet getDerivedStateFromProps ]", props);
    return state;
  }

  componentDidMount(){
    console.log('[MainComoponent] ComponentDidMount')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[MainComponent] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Person
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return <div></div>;
  }
}
