import React, { Component } from 'react'
import Person from './Persons'

export default class PersonMain extends Component {

static getDerivedStateFromProps(props,state){
    console.log('[PersonMain.js] getDrivedStateFromProps')
}

shouldComponentUpdate(nextProps,nextState){
    return true;
}

  render() {
    console.log('[personmain.js rendering...]')
    return  this.props.persons.map((person,index)=>{
return(
        <Person
            click={()=>this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={e=>this.props.changed(e,person.id)}
        />
)
}
    )
}
}
