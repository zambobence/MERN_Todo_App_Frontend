import React from 'react'
import Button from '../../shared/components/Button'
import DoneIcon from '../../assets/icon-check.svg'
import DeleteIcon from '../../assets/icon-cross.svg'
import Icon from '../../shared/components/Icon'
import './NoteItem.css'

export default function NoteItem(props) {
  return (
    <div className={`note-item ${props.className}`}>
        <Button
          onClick={props.onCheckStatus}
          className={`btn-done ${props.done ? "done" : ""}`}
        >
          <Icon img={DoneIcon} className={"flex"}/>
        </Button>
        <p>{props.text} - {props.done ? "done": "false"}</p>
        <Button onClick={props.onDelete} className={`btn-delete`}>
          <Icon img={DeleteIcon} className={"flex"}/>
        </Button>
    </div>
  )
}
