import React from 'react'
import './Icon.css'
export default function Icon(props) {
  return (
    <div className={`icon ${props.className}`}>
        {props.img && <img src={props.img} alt="icon" />}
        {props.children}
    </div>
  )
}
