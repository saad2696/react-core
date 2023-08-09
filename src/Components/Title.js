import React from "react";

 function Title() {
    console.log("i am triggered - title")
  return (
    <div>
      <h1>UseCallBack Hook</h1>
    </div>
  );
}

export default React.memo(Title)