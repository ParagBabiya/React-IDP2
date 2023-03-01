import React from 'react'
import UpdatedComponent from './HOCMain'

const Person1 = ({money,handleIncrese}) => {
//     const [money,setMoney]=useState(10)

// const handleIncrese=()=>{
//     setMoney(money*2)
// }

  return (
    <div>
        <h3>James offering money ${money}</h3>
      <button onClick={handleIncrese}>Increase</button>
    </div>
  )
}

export default UpdatedComponent(Person1)
