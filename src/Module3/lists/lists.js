import React from 'react'

const Lists = () => {
    const items = [
        {id: 1, name: 'bread'},
        {id: 2, name: 'milk'},
        {id: 3, name: 'eggs'}
      ];

  return (
    <div>
         <h1>Grocery List</h1>
      <ul>
        {items.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
      
    </div>
  )
}

export default Lists
