import React, { useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrimentAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrimentSalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrimentAge}>incriment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrimentSalary}>incriment Salary</Button>
    </div>
  );
}

export default ParentComponent;
