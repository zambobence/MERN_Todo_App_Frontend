import React from 'react'
import './MainMenu.css'

export default function MainMenu(props) {
  return (
    <div className={`main-menu ${props.children}`}>
        <h1>Main menu</h1>
        {props.children}
    </div>
  )
}
