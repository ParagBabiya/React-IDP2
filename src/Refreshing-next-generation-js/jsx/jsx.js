import React from 'react'

const Jsx = () => {
    const strings = ['Home', 'Shop', 'About Me'];

    const listItems = strings.map(string => <li>{string}</li>);
  return (
    <div>
        {listItems}
      
    </div>
  )
}

export default Jsx
