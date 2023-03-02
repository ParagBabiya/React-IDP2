// import React, { useEffect, useRef, useState } from "react";

// const RefHook = () => {
//   // const [Inputvalue,setInputvalue]=useState('')
//   const InputElement = useRef(0);

//   // useEffect(()=>{
//   //     count.current=count.current + 1;
//   // })

//   const focusInput = () => {
//     InputElement.current.focus();
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         // value={Inputvalue}
//         // onChange={(e)=>setInputvalue(e.target.value)}
//         ref={InputElement}
//       />
//       <h2>render count:{focusInput}</h2>
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// };

// export default RefHook;



import React, {useRef} from 'react'

const RefHook = () => {

let inputref = useRef(null);

function handleinput(){
    // console.log("Function Call")
    inputref.current.value='1000'
    inputref.current.focus()
}
  return (
    <div>
      <h2>Hello this is useRef.</h2>
      <input type='text' ref={inputref}/>
        <button onClick={handleinput}>handle input</button>
    </div>
  )
}

export default RefHook
