import React from "react";

export class ClassState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {brand: "Ford"};
    }
    
    
    newName(){
        this.setState({
        brand:'audi'
    })}
    render() {
      return (
        <div>
          <h1>My Car is {this.state.brand}</h1>
          <button onClick={()=>this.newName()}>Click</button>
        </div>
      );
    }
  }