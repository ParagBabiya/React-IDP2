import React from 'react'
import Radium,{StyleRoot} from 'radium'
const MediaQuery = (props) => {

const style ={
'@media (min-width:500px)':{
    width:'450px'
}
}

  return (
    <StyleRoot>

    <div className='person' style={style}>
      <p>I am {props.name}and I am {props.age} year old.</p>
      <p>{props.children}</p>

      <input type='text' onChange={props.changed} value={props.value}/>
    </div>
    </StyleRoot>
  )
}

export default Radium(MediaQuery)
