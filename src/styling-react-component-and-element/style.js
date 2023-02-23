import React from 'react'
import './style.css'
const Style = () => {

const myInlinestyling={
    border:'2px solid blue',
         marginTop:'50px',
            background:'white',
         display:'flex',
         justifyContent:'center',
         alignItem:'center',
         width:'50px',
         height:'50px',
         ':hover':{
            background:'chartreuse'
         },cursor:'pointer'

        
}

  return (
    <div className='wrapper'>
      <div className='container' style={{boxShadow:'6px 5px 12px 13px #ccc',}} >
        <div style={myInlinestyling} className='inner'>
            2
        </div>
      </div>
    </div>
  )
}

export default Style
