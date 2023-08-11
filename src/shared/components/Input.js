import React from 'react'

export default function Input(props) {
  return (
    <div className={`input-controller ${props.isValid ? "" : "invalid"} ${props.className}`}>
        <label htmlFor={props.id}>{props.label}</label>
        <input id={props.id} {...props.input} />
        {props.inputInvalid && <p>{props.error}</p>}
    </div>
  )
}
