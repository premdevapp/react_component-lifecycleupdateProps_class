import React, { Component } from "react";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Person from ".//Person/Person";

class Persons extends Component {
  //getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons js] getDerivedStateFromProps");
    return state;
  }

  //componentWillReceiveProps(props)
  /* componentWillReceiveProps(props) {
    console.log("[Persons js] componentWillReceiveProps", props);
  } */

  //shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons js] shouldComponentUpdate");
    if (nextProps.Persons !== this.props.Persons) {
      return true;
    } else {
      return false;
    }
  }

  //getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons js] getSnapshotBeforeUpdate");
    return { message: "snaphot" } /* null */;
  }

  //componentWillUpdate
  /* componentWillUpdate(){

} */

  //componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons js] componentDidUpdate", " \n", snapshot);
  }

  render() {
    console.log("[Persons js] rendereig");
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundry key={person.id}>
          <Person
            click={() => this.props.click(index)}
            changed={(event) => this.props.changed(event, person.id)}
            name={person.name}
            age={person.age}
          />
        </ErrorBoundry>
      );
    });
  }
}

export default Persons;
