import React from "react";
function Count({ text, count }) {
  console.log("i am triggered", text);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(Count);
