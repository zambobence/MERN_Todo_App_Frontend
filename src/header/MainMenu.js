import React from 'react'
import './MainMenu.css'

export default function MainMenu(props) {
  return (
    <div className={`main-menu ${props.className}`}>
        {props.children}
    </div>
  )
}
