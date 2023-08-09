import React, { Component } from "react";
import withCounter from "./withCounter";

class HOChoverCounter extends Component {
  render() {
    const { name, count, incrimentCount } = this.props;
    return (
      <div>
        {" "}
        <h3 onMouseOver={incrimentCount}>
          {name} Hover {count} times
        </h3>
      </div>
    );
  }
}

export default withCounter(HOChoverCounter);
