import React, { useState } from 'react'
import members from './Data2';
import "./Members.css"
import Heading from './Heading';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const Members = () => {
const [index, setIndex]= useState(0)
const {nadpis, zprava, img} = members[index]

const nextMember = () =>{
setIndex( (index)=>{
    const newIndex = index +1;
    return checkMember(newIndex)
})
}

const checkMember = (MemberIndex)=> {
    if (MemberIndex <0){
        return members.length -1
    }
    else if (MemberIndex > members.length -1){
        return 0
    } else{
        return MemberIndex
    }
    }
    

const prevMember = ()=>{
setIndex ( (index)=>{
    const newIndex = index -1
    return checkMember(newIndex)
})
}


  return (
   <div className='py-5 ' id='members'>
    <Heading text='members'text2='Our members'></Heading>
    <div className='container'>
   <div className='row justify-content-center align-items-center text-center'>
    
    <div className='col-lg-4'>
    <img src={img} className='mb-4 member-img'></img>
    <h2>{nadpis}</h2>
    <p>{zprava}</p>
    
    </div>

   
 
     </div>
     <FaArrowAltCircleLeft className='left-button' onClick={prevMember} /><FaArrowAltCircleRight className='right-button' onClick={nextMember}/>
    </div>
   </div>
  )
}

export default Members
