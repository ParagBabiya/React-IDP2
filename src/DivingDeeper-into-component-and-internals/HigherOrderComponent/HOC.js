import React, { useEffect, useState } from 'react'
import Auxlry from './auxlry'
import Person1 from './Person1'
import Person2 from './Person2'

const HOCList = () => {

  return (
    <Auxlry>

      <div>
        <h3>UserLIst</h3>
      <Person1/>
      <Person2/>
    </div>
    </Auxlry>
  )
}

export default HOCList
