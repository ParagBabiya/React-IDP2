import React, { Children } from 'react'

const ChildrenProperty = ({Children}) => {
  return (
    <div style={{background:'#AAA'}}>
      {Children}
    </div>

  )
}

export default ChildrenProperty
