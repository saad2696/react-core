import React, { useEffect, useState, useRef } from "react";

function HookTimer() {
  const [interval, setinterval] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setinterval((prevInterval) => prevInterval + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Interval using hook and USEREF hook for value container</h1>
      </div>
      <div>Counter -- {interval}</div>
      <div>
        <button
          onClick={() => {
            clearInterval(intervalRef.current);
          }}
        >
          Clear Interval
        </button>
      </div>
    </>
  );
}

export default HookTimer;
