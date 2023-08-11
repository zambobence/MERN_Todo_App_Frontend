import React from 'react'
import BackDrop from './BackDrop'
import Button from './Button'
export default function Modal(props) {
    const ModalOverlay = (
        <div>
            <h1>{props.content}</h1>
            <Button onClick={props.onCancel}>Okay</Button>
        </div>
    )
  return (
    <div>
        <BackDrop />
        {ModalOverlay}
    </div>
  )
}
