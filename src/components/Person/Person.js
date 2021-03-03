import React from "react";

const Person = (props) => {
  const { fullName, age, children } = props;
  return (
    <div>
      <p>
        I'm {fullName} and {age} years old. {children}
      </p>
    </div>
  );
};

export default Person;
