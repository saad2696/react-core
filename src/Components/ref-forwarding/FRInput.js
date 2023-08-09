import React from "react";

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
});

export default FRInput;
