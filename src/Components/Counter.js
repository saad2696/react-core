import React, { useState, useMemo } from "react";

function Counter() {
  const [CounterOne, setCounterOne] = useState(0);
  const [CounterTwo, setCounterTwo] = useState(0);

  const incriimentCounterOne = () => {
    setCounterOne(CounterOne + 1);
  };
  const incriimentCounterTwo = () => {
    setCounterTwo(CounterTwo + 1);
  };
  /**
   * UseMemo hook is used to perform memoization 
   * To keep hold of a value returned by a function duing re-renders
   */
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return CounterOne % 2 === 0;
  }, [CounterOne]);

  return (
    <div>
      <div>
        <button onClick={incriimentCounterOne}>
          Counter One - {CounterOne}
        </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>

      <div>
        <button onClick={incriimentCounterTwo}>
          Counter Two - {CounterTwo}
        </button>
      </div>
    </div>
  );
}

export default Counter;
