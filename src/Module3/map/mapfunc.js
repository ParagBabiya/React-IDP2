import React from 'react'
import Arrrays from './arrrays'



const name=[{
    first:'james',last:'bond',id:1
},
{
    first:'Romeo',last:'julet',id:2
}]

const Mapfunc = (props) => {
  return (
    <div>
      <Arrrays  name={name}/>


    </div>
  )
}

export default Mapfunc
