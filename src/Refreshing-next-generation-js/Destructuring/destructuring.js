import React from "react";


// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red',
//     registration: {
//       city: 'Houston',
//       state: 'Texas',
//       country: 'USA'
//     }
//   }

//   myVehicle(vehicleOne)

const Destructuring = () => {
  const vehicles = ["mustang", "f-150", "expedable"];

  const [car, , suv] = vehicles;

  const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2,
    color: "red",
  };

  return (
    <>
      <div>
        {car} ,{suv}
        <br />
        <p>
          {vehicleOne.brand} is {vehicleOne.year} year old with {vehicleOne.color} color.
        </p>
        {/* <p> My + {.model} + ' is registered in ' + {state} + '.';</p> */}
      </div>
    </>
  );
};

export default Destructuring;
