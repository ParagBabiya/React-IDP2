import React, { Component } from 'react'
import Counter from './Counter'
import FunctionCounter from './FunctionCounter'

export default class LifeCycle extends Component {

    constructor(){
        super()
        this.state={
            count:0

        }
    }
    componentDidMount(){
        console.log("componentDidMount:render first time")
    }

increment(){
    this.setState({count: this.state.count + 1})
}

componentDidMount(){
    console.log("Component Did Mount")
}

componentWillUnmount(){
    console.log("component Removed")
}

  render() {
    return (
      <div>
        {/* <Counter number={this.state.count}/> */}

        <FunctionCounter number={this.state.count}></FunctionCounter>
        {/* <button onClick={()=>this.increment()}>ClickME</button> */}
      </div>
    )
  }
}
