import React, { Component } from 'react'

export default class Counter1 extends Component {
shouldComponentUpdate(nextProps){
    if(nextProps.value !== this.props.value){
        return true
    }else{
        return false
    }
}


  render() {
      console.log("Counter 1 is Calling")
    return (
        <div>
    <h2>Counter 1:</h2>
    <h3>{this.props.value}</h3>
    <button onClick={this.props.onClick}>Add</button>

      </div>
    )
  }
}


