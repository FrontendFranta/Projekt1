import React from 'react'
import { FaHeart} from 'react-icons/fa';
import "./Footer.css"
const End = () => {
  return (
    <div className='py-5 bg-darker text-center black'>
      <div className='container'>

      <span>Stránku vytvořil František Fajna <FaHeart className='love'/></span>
      </div>
    </div>
  )
}

export default End
