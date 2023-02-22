import React from 'react'

const Methods = () => {
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
      };
      person.name = function() {
        return this.firstName + " " + this.lastName;
      };
  return (
    <div>
     <p>
         My father is   {person.name()} 
        </p>
    </div>
  )
}

export default Methods
