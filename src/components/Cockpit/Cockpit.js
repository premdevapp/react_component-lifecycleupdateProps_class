import React, { useEffect } from "react";
import ClassesCockpit from "./Cockpit.module.scss";
const Cockpit = (props) => {
  useEffect(
    () => {
      console.log(
        "Every render cycle component did mount and component did update"
      );
      const timer = setTimeout(() => {
        alert("some callbacks");
      }, 1000);
      return () => {
        clearTimeout(timer);
        console.log(" clean up work done here");
      };
    },
    [
      /* props.persons */
    ]
  );

  useEffect(() => {
    console.log(
      "2nd Every render cycle component did mount and component did update"
    );
    return () => {
      console.log("2nd clean up work done here");
    };
  });

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
