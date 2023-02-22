import React from 'react'
import Radium from 'radium'
const AddingRaduim = () => {

    const style1={
            background:'red',
            color:'white',
            width:'100px',
            height:'30px',
            ':hover':{
                backgroundColor:'teal',
                color:'white',
                cursor:'pointer'
            }
    }

    // style1.background='blue'
    style1[':hover']={
        backgroundColor:'lightgreen',
        color:'brown'
    }
  return (
    <div>
      <h1 >This is Title.</h1>
      <input type='text'/>
      <button style={style1} onClick={console.log('clicked')}>Click</button>
    </div>
  )
}

export default Radium(AddingRaduim)
