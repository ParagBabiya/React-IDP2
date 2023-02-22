import React from 'react'

const Lists = () => {

const lists = [
    {name:'pa',team:'A',id:1},
    {name:'ra',team:'B',id:2},
    {name:'ga',team:'C',id:3},
    {name:'ba',team:'D',id:4},
]

  return (
    <div>
        {
            lists.map((detail)=>(
                <div key={detail.id}>
                <h1>{detail.name}</h1>
                <h1>{detail.team}</h1>
                </div>
            ))
        }
      
    </div>
  )
}

export default Lists
