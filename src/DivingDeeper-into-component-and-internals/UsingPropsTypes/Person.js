import React from 'react'
import PropTypes from 'prop-types';


const Person = ({states}) => {
  return (
    <div>
      {/* <h1>This person age is {age}</h1> */}
      {/* <h1>This person age is {name}</h1> */}
      {/* <h1>This person age is {stringornumber}</h1> */}
      <h1>This person age is {states}</h1>

      rendreable
    </div>
  )
}

Person.propTypes={
    // age:PropTypes.number.isRequired,


    states:PropTypes.oneOf([
   ['Loading,ready']
])

    // age:PropTypes.any.isRequired,
    // name:PropTypes.string,
    // rendreable:PropTypes.element
}

export default Person
