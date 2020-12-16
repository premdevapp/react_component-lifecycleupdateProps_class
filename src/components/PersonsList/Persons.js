import React from "react";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Person from ".//Person/Person";

const Persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <ErrorBoundry key={person.id}>
        <Person
          click={() => props.click(index)}
          changed={(event) => props.changed(event, person.id)}
          name={person.name}
          age={person.age}
        />
      </ErrorBoundry>
    );
  });

export default Persons;
