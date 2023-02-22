import React,{useState} from 'react'

const initState={

    fname:'bruce',
    lname:'Wayne'
}

const Immutable = () => {

const[person,setPerson]=useState(initState)

const changename =()=>{
    // person.fname='james'
    // person.lname='bond'
    // setPerson(person)

const newPerson ={...person}
newPerson.fname='James'
newPerson.lname=' Bond'
setPerson(newPerson)
}
console.log('object Usestate Render')

  return (
    <div>
      <button onClick={changename}>{person.fname}{person.lname}</button>
    </div>
  )
}

export default Immutable
