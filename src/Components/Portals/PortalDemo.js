import React from "react";
import ReactDom from "react-dom";

function PortalDemo(props) {
  return ReactDom.createPortal(
    <div>
      <h3>I am an 👽 i cam from other Portal Tree (Portal in React) 🚀</h3>
      {props.portalProps}
      <p>---------------------------------------------------------------</p>
      {/* https://codesandbox.io/s/00254q4n6p */}
      {/* Props can be passed down to component if that is in other portals too 
      https://codepen.io/gaearon/pen/jGBWpE */}
    </div>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
