import React, { Component } from "react";
import Classes from "./App.module.scss";
import PersonList from "../components/PersonsList/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("[ App.js ] is constructed");

    this.state = {
      persons: [
        { id: "asf111", name: "Premnath", age: 29 },
        { id: "asf222", name: "Priyadharsini", age: 27 },
        { id: "asf333", name: "Pichaimuthu", age: 57 },
        { id: "asf444", name: "Padmavathy", age: 42 },
      ],
      showPersons: false,
      showCockpit: true,
    };
  }

  //getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log(" [App js getDerivedStateFromProps]", props);
    return state;
  }

  //componentDidMount
  componentDidMount() {
    console.log("[App js] componentDidMount");
  }

  //shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App js] shouldComponentUpdate");
    return true;
  }

  //componentDidUpdate
  componentDidUpdate() {
    console.log("[App js] componentDidUpdate");
  }

  //componentWillMount
  componentWillMount() {
    console.log("[App js] componentWillMount");
  }

  nameChangedHandler = (event, id) => {
    const personInx = this.state.persons.findIndex((prsn) => {
      return prsn.id === id;
    });

    //const person = Object.assign({}, this.state.persons[personInx]);
    const person = { ...this.state.persons[personInx] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personInx] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    //mutation
    //const persons = this.state.persons;
    //non mutation
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let Persons = null;

    if (this.state.showPersons) {
      Persons = (
        <PersonList
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={Classes.Main}>
        <header className={Classes.Appheader}>
          <button
            onClick={() => {
              this.setState({ showCockpit: false /*!this.state.showCockpit*/ });
            }}
          >
            Toggle Cockpit
          </button>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              persons={this.state.persons}
              showPersons={this.state.showPersons}
              togglePersonsHandler={this.togglePersonsHandler}
            />
          ) : null}
          {Persons}
        </header>
      </div>
    );
  }
}

export default App;
