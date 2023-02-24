import React, { useEffect } from 'react'

export default function FunctionCounter({number}) {

useEffect(()=>{
    console.log("functional component : updating.....")

return()=>{
    console.log("Function component : Removed")
}

},[number])

  return (
    <div>
      <h1>{number}</h1>
    </div>
  )
}
