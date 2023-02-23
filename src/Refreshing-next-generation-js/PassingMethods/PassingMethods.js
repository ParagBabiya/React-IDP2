import React from 'react'

const PassingMethods = (props) => {



  return (
    <div>
      <h1 onClick={props.clicked}>
        {/* Hello This Is passing method refenrece. */}
        i am {props.name} and i am {props.age} year old.
      </h1>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed}/>

      {/* <button onClick={props.data}>Click</button> */}
    </div>
  )
}

export default PassingMethods
