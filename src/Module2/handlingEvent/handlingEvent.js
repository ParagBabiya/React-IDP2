import React, { useState } from 'react'

const HandlingEvent = () => {
    const [greet,setGreet]=useState('Morning')

    const handleclick=()=>{
        setGreet(' Evening')
    }
  return (


    <div>
        <h1>Good {greet}</h1>
        <button onMouseDown={handleclick}>Click</button>
      
    </div>
  )
}

export default HandlingEvent
