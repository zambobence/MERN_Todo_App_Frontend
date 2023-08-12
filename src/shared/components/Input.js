import React from 'react'
import './Input.css'
import Card from './Card'
export default function Input(props) {
  return (
    <div className={`input-controller${props.inputInvalid ? " invalid" : ""}`}>
        {props.labelEnabled && <label htmlFor={props.id}>{props.label}</label>}
        <Card>
          <input id={props.id} {...props.input} aria-label={props.label}/>
          {props.inputInvalid && <p className='error'>{props.error}</p>}
        </Card>
    </div>
  )
}
