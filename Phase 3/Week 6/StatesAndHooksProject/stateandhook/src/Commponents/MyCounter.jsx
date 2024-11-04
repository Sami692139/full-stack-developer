import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";
import '../assets/CSS/MyCounter.css';

class MyCounter extends Component {
  //Initialize the state
  constructor() {
    super();
    this.state = { count: 0 };
  }
  //function increase the number by one 
  allClicksCounter = () => {
    this.setState((updetedValue) => {
      return { count: updetedValue.count + 1 };
    });
  };
  render() {
    return (
      <div className="mycount">
        <CounterDisplayer x={this.state.count} />
        <EvenCounterDisplayer eventcount={this.state.count} />
        <button className="clickeme"  onClick={this.allClicksCounter}>
          Click me
        </button>
      </div>
    );
  }
}

export default MyCounter;
