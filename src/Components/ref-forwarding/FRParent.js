import React, { Component } from "react";
import FRInput from "./FRInput";

export class FRParent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <>
        <div>
          <h1>Forwarding Refs Demo</h1>
        </div>
        <div>
          <FRInput ref={this.inputRef} />
          <div>
            <button
              onClick={() => {
                this.clickHandler();
              }}
            >
              Focus Input
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default FRParent;
