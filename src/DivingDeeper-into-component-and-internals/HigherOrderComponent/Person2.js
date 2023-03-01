import React from 'react'
import UpdatedComponent from './HOCMain'

const Person2 = ({money,handleIncrese}) => {
    // const [money,setMoney]=useState(10)

    // const handleIncrese=()=>{
    //     setMoney(money*2)
    // }

  return (
    <div>
        <h3>Bond offering money ${money}</h3>
      <button onClick={handleIncrese}>Increase</button>
    </div>
  )
}

export default UpdatedComponent(Person2)
