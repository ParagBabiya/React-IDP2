import React from 'react'

const Dynamic = () => {
  return (
    <div>
      <p>My name is james and i am {(Math.random(Math.round))*100}</p>
    </div>
  )
}

export default Dynamic
