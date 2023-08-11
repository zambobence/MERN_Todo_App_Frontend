import React from 'react'
import './Button.css'
export default function Button(props) {
  return (
    <button 
        disabled={props.disabled}
        onClick={props.onClick} 
        className={`btn ${props.className ? props.className : ''}`}
    >
        {props.children}
    </button>
  )
}
