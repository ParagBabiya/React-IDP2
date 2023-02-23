import React, { useState } from 'react'

const initstate = ['bruce','wayne']

const ArrayUseState = () => {
const [person,setPerson]=useState(initstate)

const handleClick=()=>{
    // person.push('james')
    // person.push('Bond')
    // setPerson(person)

    const newPerson=[...person]
    newPerson.push('MC')
    newPerson.push('Stan')
    setPerson(newPerson)
    console.log('CLicked')
}

  return (
    <div>
        <button onClick={handleClick}>Click</button>
      {
        person.map(person=>(
            <div key={Math.random()}> {person}</div>
        ))
      }
    </div>
  )
}

export default ArrayUseState
