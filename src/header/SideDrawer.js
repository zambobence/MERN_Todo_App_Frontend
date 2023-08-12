import React, { useEffect } from 'react'
import  ReactDOM from 'react-dom'
import './SideDrawer.css'
export default function SideDrawer(props) {

    const content = (
        <div className={`side-drawer`} style={props.menuOpen ? {display: 'block'} : null}>
            {props.children}
        </div>

    )

    return ReactDOM.createPortal(content, document.getElementById('sidedrawer-hook'))
}
