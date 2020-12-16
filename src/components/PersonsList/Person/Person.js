import React, { Component } from "react";
import PersonClass from "./Person.module.scss";

class Person extends Component {
  /* if (Math.floor(Math.random() * 10) > 7) {
    throw new Error("Something Went Wrong!!!");
  } */

  //componentWillUnmount
  componentWillUnmount() {
    console.log("[ Person js ] componentWillUnmount");
  }

  render() {
    console.log("[Person js] rendering");
    return (
      //<p>I'm a person and my age is {Math.floor(Math.random() * 30)} years</p>
      <div className={PersonClass.personCard}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and my age is {this.props.age} years
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
