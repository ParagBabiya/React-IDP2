import React, { useState } from 'react'

const StateFunction = () => {
const[name,setName]=useState('Parag')


  return (
    <div>
        my name is {name}
        <button onClick={()=>setName('James')}>Clickme</button>
      
    </div>
  )
}

export default StateFunction
