// import React, { useState } from "react";

// function UpdatedComponent(Originalcomponent) {
//   function NewComponent() {
//     const [money, setMoney] = useState(10);

//     const handleIncrese = () => {
//       setMoney(money * 2);
//     };
//     return <Originalcomponent handleIncrese={handleIncrese} money={money} />;
//   }

//   return NewComponent;
// }

// export default UpdatedComponent;


























import React, { useState } from 'react'

const UpdatedComponent = (Originalcomponent) => {

    function NewComponent(){
        const[money,setMoney]=useState(10)

        const handleIncrese =()=>{
            setMoney(money +2)
        }
        return <Originalcomponent money={money} handleIncrese={handleIncrese}/>
    }
  return NewComponent
  
}


export default UpdatedComponent
