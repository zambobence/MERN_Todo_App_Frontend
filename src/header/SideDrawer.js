import React, { useEffect } from 'react'
import  ReactDOM from 'react-dom'
import './SideDrawer.css'
export default function SideDrawer(props) {

    const content = (
        <>
            <div className='mobile-nav'>
                <div className={`side-drawer ${props.className}`} style={props.menuOpen ? {display: 'block'} : null}>
                    <h1>SideDrawer</h1>
                    {props.children}
                </div>
            </div>
        </>
    )

    return ReactDOM.createPortal(content, document.getElementById('sidedrawer-hook'))
}
