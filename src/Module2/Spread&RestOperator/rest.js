import React from 'react'

const Rest = () => {
    const num =[1,2,3,4,5,6]

    const[one,two,...rest] =num;
  return (
    <div>
      {one}<br/>
      {two}<br/>
      {rest}
    </div>
  )
}

export default Rest
