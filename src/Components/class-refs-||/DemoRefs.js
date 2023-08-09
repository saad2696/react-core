import React, { Component } from "react";

class DemoRefs extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    //Callback refs
    this.cbRef = null;
    this.setCallbackRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    this.inputRef.current.value = "Initial Value";
    if (this.cbRef) {
      this.cbRef.value = "Callback ref value";
    }
  }
  render() {
    return (
      <div>
        <div>
          <h1>Refs in Classes using constructor </h1>
        </div>
        <div>
          <input ref={this.inputRef} type="text" />
        </div>

        <div>
          <div>
            <h1> Callback refs</h1>
          </div>
          <div>
            <input ref={this.setCallbackRef} type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default DemoRefs;
