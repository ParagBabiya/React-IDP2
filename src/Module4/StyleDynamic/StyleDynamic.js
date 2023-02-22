import React, { useState } from 'react'
import './style.css'

const StyleDynamic = () => {
const [isValid,setIsValid]=useState(false)
const[color,setColor]=useState('')

let x=5;
let colors=[]

if(x<=15){
    colors.push('textred')
}
else if(x>=50)
{
    colors.push('textgreen')
}

const Inputhandler=()=>{

}
  return (

    <div className={`formControl ${!isValid?'invalid':''}`}>
      <h1 className={colors}>{x}</h1>

      <form>
        <input 
        type="text" onChange={Inputhandler}
        /><button>Add</button>
        <h1 className={`${isValid?'color':'color2'}`}>Hi this is color of {color}</h1>
      </form>
    </div>
  )
}

export default StyleDynamic
