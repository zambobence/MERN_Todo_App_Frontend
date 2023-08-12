import React from 'react'
import BackDrop from './BackDrop'
import Button from './Button'
import './Modal.css'
export default function Modal(props) {

    const ContentBox = (
        <div className='contentBox'>
            <h1>{props.content}</h1>
            <Button className={'center error'} inverse onClick={props.onCancel} style={{marginTop: '2rem'}}>Okay</Button>
        </div>
    )

  return (
    <div className={`modal ${props.className}`}>
        <BackDrop show={props.show} />
        {ContentBox}
    </div>
  )
}
