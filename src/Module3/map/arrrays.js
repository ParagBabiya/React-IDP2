import React from 'react'

const Arrrays = ({title,name}) => {

  return (
    <div>
      {/* <h1>{title}.</h1> */}
      {
      name.map((n)=>(
        <div key={n.id}>
        <h1>{n.first}  {n.last}</h1>
            </div>
      ))
      }
    </div>
  )
}

export default Arrrays
