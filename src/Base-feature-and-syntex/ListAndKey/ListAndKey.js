import React, { useState } from 'react'



const ListAndKey = (props) => {
    const num=[1,2,3,4,5,6]
   const num2=[7,21,31,32,12,4]
const users= props.list
// const users =[
//     {id:1,name:'om',result:'pass'},
//     {id:2,name:'jay',result:'pass'},
//     {id:3,name:'sam',result:'fail'},
// ]


const [list,setList]=useState(num)

const handlelist=()=>{
    setList(()=>num2)
}
  return (
    <div>      
    
    {list.map((n,i)=>(
        <li key={i=Math.random()}>{n}</li>
    ))}
    <button onClick={handlelist}>ADD</button>
{
    users.map((user,i)=>(
               <div key={user.id}> <h2>{user.name}</h2>
                <h2>{user.id}</h2>
                <h2>{user.result}</h2></div>
    ))
}
    </div>
  )
}

export default ListAndKey
