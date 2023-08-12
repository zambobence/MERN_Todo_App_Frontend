import React from 'react'
import './Button.css'
export default function Button(props) {
  return (
    <button
        style={props.style}
        disabled={props.disabled}
        onClick={props.onClick}
        className={`btn ${props.className} ${props.inverse && 'inverse'}`}
    >
        {props.children}
    </button>
  )
}
