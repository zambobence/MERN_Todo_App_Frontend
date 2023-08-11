import React from 'react'
import ReactDOM from 'react-dom'
import './Backdrop.css'

export default function BackDrop(props) {

    const content = (
        <div
            className='backdrop'
            onClick={props.onClick}
            style={{display: props.show ? 'block' : 'none'}}
        >
        </div>
        )
    return (
        ReactDOM.createPortal(content, document.getElementById('backdrop-hook'))
    )
}
