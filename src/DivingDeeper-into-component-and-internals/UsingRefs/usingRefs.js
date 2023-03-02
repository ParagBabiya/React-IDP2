import React, { Component,createRef } from 'react'

export default class UsingRefs extends Component {

constructor()
{
    super()
// this.inputRef=createRef();

this.inputRef=createRef();
}

componentDidMount(){
    // console.log(this.inputRef.current.value='111231')
}
// getVal(){
// console.log(this.inputRef.current.value)
// this.inputRef.current.style.color='red'
// this.inputRef.current.style.backgroundColor='green'
// }

getVal(){
    console.log(this.inputRef.current.value)
    this.inputRef.current.style.color ='selmon'
}

  render() {
    return (
      <div>
        <h3>Refs in react</h3>
        <input type='text' ref={this.inputRef} />
        <button onClick={()=>this.getVal()}>Check ref</button>
      </div>
    )
  }
}
