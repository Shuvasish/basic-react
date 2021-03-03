import "./App.css";
import React from "react";
import Person from "./components/Person/Person";
import ClassTest from "./components/ClassTest/ClassTest";

function App() {
  return (
    <div className="App">
      <h1> Shuvasish</h1>
      <Person fullName={"shuvasish"} age={25} />
      <Person fullName={"dipu"} age={26} />
      <Person fullName={"supto"} age={15}>
        Unofficial Age: 17
      </Person>
      <ClassTest></ClassTest>
    </div>
    // React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "shuvo")
    // )
  );
}

export default App;
