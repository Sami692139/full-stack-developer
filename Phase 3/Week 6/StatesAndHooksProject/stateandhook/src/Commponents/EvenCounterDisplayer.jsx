import React, { Component } from "react";

class EvenCounterDisplayer extends Component {
  render() {
    const { eventcount } = this.props;
    const message =
      eventcount % 2 == 0
        ? `Clicked ${eventcount}`
        : `Clicked ${eventcount - 1}`;
    return (
      <div>
        <h3>Even Clicked:{message} </h3>
      </div>
    );
  }
}

export default EvenCounterDisplayer;
