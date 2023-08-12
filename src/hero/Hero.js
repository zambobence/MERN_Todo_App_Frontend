import React from 'react'
import './Hero.css'
export default function Hero(props) {
  return (
    <div className='hero'>
        {props.children}
    </div>
  )
}
