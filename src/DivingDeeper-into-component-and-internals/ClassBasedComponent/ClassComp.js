import React, { Component } from 'react'
import Greetings from './Greetings'
import Header2 from './Header2'

export default class ClassComp extends Component {
  render() {
    return (
      <div>
        <Header2 username='James BOnd'/>
        <Greetings/>
      </div>
    )
  }
}
