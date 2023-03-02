import React, { useState,useEffect } from 'react'

const UseEffect = () => {
const [num,setNum]=useState(0)
const [nums,setNums]=useState(0)
const [isShow,setIsShow]=useState(true)

useEffect(()=>{
    // document.title=`Chats ${num}`
    alert('clicked')
    setTimeout(()=>{
      console.log("Cleaner work 1sec in useEffect")

      // alert('timeout for 1 sec')
    },1000);

    return ()=>{
      console.log("Cleaner work in useEffect")
    }
},[])

useEffect(()=>{
  console.log("2nd useEffect")
  return()=>{
    console.log("Cleaner work in 2nd useEffect")

  }

  
},[])
  
  return (
    <div>
      <button onClick={()=>{
        setIsShow(false)
      }}>Remove</button>

     {isShow?
     <div> 
      <button onClick={()=>setNum(num+1)}>Click Me{num}</button><br/>
      <button onClick={()=>setNums(nums+1)}>Click Me{nums}</button>
      </div>:''}
    </div>
  )
}

export default UseEffect
