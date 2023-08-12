import React from 'react'
import Container from '../../shared/components/Container'
import Card from '../../shared/components/Card'
import NoteItem from './NoteItem'
import './NoteList.css'

export default function NoteList(props) {

    if (!props.items){
        return (
            <Container>
                <p>Something went wrong, no notes found</p>
            </Container>
    )}

    const noteArray = props?.items.map(e =>
        <NoteItem
            key={e._id}
            noteId={e._id}
            text={e.text}
            done={e.done}
            onDelete={() => props.deleteNote(e._id)}
            onCheckStatus={() => props.checkNote(e._id, e.done)}
            className={`flex${e.done ? ' done' : ''}`}
        />
    )

    if (props?.items.length === 0){
        return (<Container>
            <p>No notes found</p>
        </Container>
    )}

    return (
    <Card className={`note-list${props.className}`}>
        {noteArray}
    </Card>
  )
}
