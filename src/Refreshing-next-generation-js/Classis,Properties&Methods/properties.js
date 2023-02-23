import React from 'react'

const Properties = () => {

    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
      };
      
      delete person.age;
  return (
    <div>
      <h4>
        {person.firstName} + " is " + {person.age} + " years old.";
        </h4>
    </div>
  )
}

export default Properties
