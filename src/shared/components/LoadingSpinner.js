import React from 'react'
import './LoadingSpinner.css'
import LoadingCircle from './LoadingCircle'
import BackDrop from './BackDrop'
export default function LoadingSpinner(props) {
  return (
    <div className='loadingSpinnerContainer'>
      <BackDrop show={props.show} />
      <div className='loadingSpinner'>
        <h3>Loading</h3>
        <LoadingCircle />
      </div>
    </div>
  )
}
