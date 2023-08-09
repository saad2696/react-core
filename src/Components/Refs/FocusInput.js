import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    //Focus input element
    inputRef.current.focus();
  }, []);

  const inputValueHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>UseRef() inplementation</h1>
      </div>
      <div>
        <input ref={inputRef} onChange={inputValueHandler} />
      </div>
    </div>
  );
}

export default FocusInput;
