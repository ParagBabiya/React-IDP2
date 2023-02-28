import React, { Component } from "react";

export default class Header2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState = (prev => ({ count: prev.this.count + 1 }));
  };

  // componentDidMount=()=>{
  // console.log("componentdidmoint")
  // }
  render() {
    return (
      <div>
        <h1>wELCOME, {this.state.count}</h1>
        <button onClick={this.handleClick}>CLick </button>
      </div>
    );
  }
}
