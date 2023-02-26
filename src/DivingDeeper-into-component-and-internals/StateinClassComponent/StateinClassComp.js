import React,{Component} from "react";

export default class ClassStatefullComp extends Component{
constructor(){
    super()
    this.state={
        out:'Yes'
    }
}

toggleOut=()=>{
    this.setState(prev =>{
        return {
           out: prev.out === "Yes"?"No":"Yes"}
        //    this.toggleOut = this.toggleOut.bind(this)
    })
}

    render(){
        return(
<div>
    <h4>Is it out:</h4>
    <button onClick={this.toggleOut}>Click</button>
        <h1>{this.state.out}</h1>
    
</div>
        )
    }
}