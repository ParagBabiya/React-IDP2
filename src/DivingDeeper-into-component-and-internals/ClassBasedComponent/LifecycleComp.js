import React, { Component } from 'react'

export default class LifecycleComp extends Component {
    
    state={
        charactor:{
            
        }
    }
    
    componentDidMount(){
    
    console.log("ComponentDidMount")
    fetch("https://swapi.dev/api/people/1")
    .then(res=>res.json())
    .then(data=>
        this.setState({charactor:data}))
}

  render() {
    console.log("render")
    return (
      <div>
        <h1>{this.state.charactor.name}</h1>
      </div>
    )
  }
}
