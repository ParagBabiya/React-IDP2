import React, { Component } from "react";

export default class Person extends Component{
    constructor(){
        console.log('Constructor...')
        super();
        this.state ={
            name:'',
            counter:0,
            message:"Click Me"
        }
    }

    static getDerivedStateFromProps(props,state){
console.log('[propsCHange.js] getDerivedStateFromProps',props)

return state
    }

    
    shouldComponentUpdate(){
        return true;
    }
    componentDidMount(){
        console.log("Comoponent Did Mount")
    }
    
    // componentDidUpdate(){
    //     console.log('[PropsChange.js] ComponentDidUpdate')
    // }
    
    onClick=()=>{
        this.setState({
            counter:this.state.counter + 1,
            message:"Clicked",
        });
        console.log("rendering....")
    }


shouldComponentUpdate(nextProps,nextState){
    console.log('[propschange.js] shouldComponentUpdate');
    return true;
}

    getSnapshotBeforeUpdate(prevProps, prevState){
 console.log("[Props.change] getSnapshotBeforeUpdate")
 return {message:'Snapshot'}
     }

componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[PropsChange.js] componentDidUpdate')
    console.log(snapshot)

}
 
    render(){
        return(
            <div>
                <h5>{this.state.counter}</h5>
                <input value={this.state.counter}/>
                <button onClick={this.onClick}>{this.state.message}</button>
                
            </div>

        )
    }
}