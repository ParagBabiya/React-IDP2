import React from 'react'

const Spread = () => {
    const numOne = [1, 2, 3];
const numTwo = [4, 5, 6];
const numbersCombined = [...numOne, ...numTwo];

// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
  
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow'
//   }
// const myVehicle2 = [...myVehicle,...updateMyVehicle];
// console.log(myVehicle2);
return (
    <div>
        <p>{numbersCombined}
            </p>
            {/* <h6>{myVehicle2.brand}</h6> */}
      
    </div>
  )
}

export default Spread;
