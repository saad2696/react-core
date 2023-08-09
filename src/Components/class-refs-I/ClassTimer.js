import React, { Component } from "react";

export class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <div>
          <h1>Class based build up for useRef hook</h1>
        </div>
        <div>ClassTimer - {this.state.timer}</div>

        <div>
          <button
            onClick={() => {
              clearInterval(this.interval);
            }}
          >
            Clear Timer
          </button>
        </div>
      </>
    );
  }
}

export default ClassTimer;
