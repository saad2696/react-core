import React from "react";

const withCounter = (WrappedCompnent) => {
  class WithCounter extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
        };
      }
    
      incrimentCount = () => {
        this.setState((prevState) => {
          return { count: prevState.count + 1 };
        });
      };
    render() {
      return <WrappedCompnent name='Saad' count={this.state.count} incrimentCount={this.incrimentCount} />;
    }
  }

  return WithCounter
};


export default withCounter