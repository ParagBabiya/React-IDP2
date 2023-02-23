import React from 'react'
import ChildrenProperty from '.'

const ChildComponent = (props) => {
  return (
      
      <div style={{background:'#aaa', color:'white'}}>
        <h4>This is Children </h4>
        {props.children}
      </div>  
      
  )
}

export default ChildComponent
