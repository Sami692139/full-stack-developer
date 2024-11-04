import React, { Component } from "react";

class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>Cliked Counter: {this.props.x}</p>
      </div>
    );
  }
}

export default CounterDisplayer;
