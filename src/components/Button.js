import React from 'react'
import "./Button.css"
const Button = (props) => {
    const handleClick = () => {
        window.location.href = props.href;
    };

  return <button className='page-button' onClick={handleClick}>{props.text}</button>
}

export default Button
