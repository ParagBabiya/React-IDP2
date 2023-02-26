import React, { Component } from "react";
import Counter from "./Counter";
import FunctionCounter from "./FunctionCounter";

export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      mount: true,
    };

    this.mountCounter = () => this.setState({ mount: true });
    this.unMountCounter = () => this.setState({ mount: false });
  }
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedstateFromProps",props)
    return state;
  }

  // componentWillMount(){
  //   console.log("componentWillMount")
  // }
  componentDidMount(){
    console.log("componentDidMount")
  }

  increment = () => this.setState({ count: this.state.count + 1 });

  // componentDidMount() {
  //   console.log("componentDidMount:render first time");
  // }

  // componentDidMount(){
  //     console.log("Component Did Mount")
  // }

  componentWillUnmount() {
    console.log("component Removed");
  }

  render() {
    return (
      <div>
        <Counter number={this.state.count} />
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unMountCounter} disabled={!this.state.mount}>
          UnMount
        </button>
        {/* <FunctionCounter number={this.state.count}></FunctionCounter> */}
        <button onClick={this.increment}>ClickME</button>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
  }
}
