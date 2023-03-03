import React from 'react'
import "./Header.css"
const Heading = (props) => {
  return (
  
    <div className='main-heading text-center'>
    
    <p className='sub-heading mb-2'>{props.text}</p>
    <h2 className='mb-5 nadpis'>{props.text2}</h2>
   
</div>
  )
}

export default Heading
