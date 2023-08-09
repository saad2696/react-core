import React, { Component } from "react";

import withCounter from "./withCounter";

class HOCcounter extends Component {
  render() {
    const { count, name, incrimentCount } = this.props;
    return (
      <div>
        <div>
          <h1>Higher order component  in React</h1>
        </div>
        <button onClick={incrimentCount}>
          {name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(HOCcounter);
