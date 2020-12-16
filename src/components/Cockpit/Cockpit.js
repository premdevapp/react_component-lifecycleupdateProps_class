import React from "react";
import ClassesCockpit from "./Cockpit.module.scss";
const Cockpit = (props) => {
  const assignedClasses = [];

  let btnClass = [ClassesCockpit.button];

  if (props.showPersons) btnClass.push(ClassesCockpit.Red);

  if (props.persons.length <= 2) assignedClasses.push(ClassesCockpit.red);
  if (props.persons.length <= 1) assignedClasses.push(ClassesCockpit.bold);

  return (
    <div>
      <p>Hi i am REACT app : {props.title}</p>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button
        className={btnClass.join(" ")}
        onClick={props.togglePersonsHandler}
      >
        Toggle Show
      </button>
    </div>
  );
};

export default Cockpit;
