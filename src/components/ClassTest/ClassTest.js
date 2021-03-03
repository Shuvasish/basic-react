import React, { Component } from "react";
import Person from "../Person/Person";

class ClassTest extends Component {
  state = {
    persons: [
      { name: "keya", age: 19 },
      { name: "mitu", age: 20 },
      { name: "mita", age: 23 },
    ],
  };
  switchNameHandler = () => {
    this.setState({
      persons: [{ name: "shuvasish", age: 19 }],
    });
  };
  render() {
    return (
      <div>
        <p>class </p>
        {this.state.persons.map((da, i) => (
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              width: "400px",
              margin: "0 auto",
            }}
            key={i}
          >
            <button onClick={this.switchNameHandler}>oka</button>
            <Person fullName={da.name} age={da.age} />
          </div>
        ))}
      </div>
    );
  }
}
export default ClassTest;
