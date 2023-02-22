import React, { Component } from 'react'
import PassingMethods from './PassingMethods'



  class Passinghandler extends Component{
    state={
      person:[
        {name:'Raju',age:32},
        {name:'bond',age:52}
      ]
    }

    nameChange = (newName)=>{
      this.setState({
        person:[
        {name:newName,age:42},
        {name:'Bheem',age:44}
          
        ]
      })
    }

    namechangehandle=(event)=>{
      this.setState({
        person:[
        {name:'raju',age:42},
        {name:event.target.value,age:44},
        {}
          
        ]
      })

    }

    render(){
return(

  <div>
      <PassingMethods name={this.state.person[0].name}
      age={this.state.person[0].age}
      clicked={this.nameChange.bind(this,'RamaRAJU')}
      changed={this.namechangehandle}/>
      <PassingMethods name={this.state.person[1].name}
      age={this.state.person[1].age}/>

      <button onClick={this.nameChange.bind(this,'Rama')}>Change</button>
    </div>
    )
    }  
  
}

export default Passinghandler
