import React, { Component } from "react";
import HOCcounter from "./HOCcounter";
import HOChoverCounter from "./HOChoverCounter";

export class ParentHoc extends Component {
  render() {
    return (
      <div>
        <div>
          <HOCcounter />
        </div>
        <div>
            <HOChoverCounter/>
        </div>
      </div>
    );
  }
}

export default ParentHoc;
