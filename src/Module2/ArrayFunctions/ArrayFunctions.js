import React from "react";

const ArrayFunctions = () => {
  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = array1.concat(array2);

  
//   const isBelowThreshold = (currentValue) => currentValue < 40;
  const array4 = [1, 30, 39, 29, 10, 13];

  const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];

  const months = ['Jan', 'March', 'April', 'June'];
  const months1 = ['Jan', 'March', 'April', 'June'];

  const months2=months1.pop()
  
  return (
      <div>
      {/* {array3} */}
        {/* <h1>{array4.every(isBelowThreshold)}</h1> */}
{months.splice(1,0,'feb')}
<h1>{months}</h1>
<h2>{months2}</h2>
{/* <h3>{months3}</h3> */}
          {/* {months1.push('nov')} */}
{/* <h4>{array1.unshift(1)}</h4> */}
    </div>
  );
};

export default ArrayFunctions;
