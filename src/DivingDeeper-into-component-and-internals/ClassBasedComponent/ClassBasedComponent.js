import { Component } from "react";

class CBcomp extends Component{
    // state={
    //     person:[
    //         {id:1,name:'James',age:'28'},
    //         {id:2,name:'Max',age:'27'},
    //         {id:3,name:'Sames',age:'24'},
    //     ],
    //     otherstates:'some values',
    //     Showperson:false
    // }

constructor(props){
    super(props);
    this.state ={
        count:0
    }
}
increment=()=>{
    this.setState(prevstate=>({
        count:prevstate.count +1
    }));
}

    render(){
        return(
            <div>
                <h1>
                    Cont:{this.state.count}
                </h1>
<button onClick={this.increment}>Increment</button>
            </div>
        )
        
    }
}

export default CBcomp;