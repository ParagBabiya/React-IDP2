import React, { Component } from 'react'
import AuthContext from './MainComp'
export default class ChildComp extends Component {
  render() {
    console.log(this.context)
    return (
      <div>
        <h1>ChildComponent</h1>
      </div>
    )
  }
}
ChildComp.contextType= AuthContext
