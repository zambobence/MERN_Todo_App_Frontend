import React, {useState, useEffect, useContext, useCallback} from 'react'
import NoteInputForm from '../components/NoteInputForm'
import Container from '../../shared/components/Container'
import useHttpClient from '../../shared/hooks/use-http'
import AuthContext from '../../shared/context/auth-context'
import LoadingSpinner from '../../shared/components/LoadingSpinner'
import Modal from '../../shared/components/Modal'
import NoteList from '../components/NoteList'


export default function Home() {

  const [notes, setNotes] = useState([])
  const {token} = useContext(AuthContext)
  const {isLoading, errorStatus, clearError, sendRequest}= useHttpClient()

  const fetchNotes = useCallback (async  () => {
    const responseData = await sendRequest(
      "https://mern-todo-app-backend-60nd.onrender.com/notes",
      "GET",
      {'Authorization': `Bearer ${token}`},
    )
    if (!errorStatus){
      console.log(responseData?.notes)
      setNotes(responseData?.notes)
    }
  },[token, sendRequest, errorStatus])

  const deleteNote = useCallback(async (noteId) => {
    console.log(noteId)
    const responseData = await sendRequest(
      `https://mern-todo-app-backend-60nd.onrender.com/delete/${noteId}`,
      "DELETE",
      {'Authorization': `Bearer ${token}`},
    )
    console.log(responseData)
    fetchNotes()
  },[])

  const checkNote = useCallback(async (noteId, done) => {
    const responseData = await sendRequest(
      `https://mern-todo-app-backend-60nd.onrender.com/notes`,
      "PATCH",
      {'Authorization': `Bearer ${token}`},
      {
        noteId: noteId,
        done: !done
      }
    )
    fetchNotes()
  },[])

  const noteSubmitHandler = async (requestBody) => {
    clearError()
    const data = await sendRequest(
        "https://mern-todo-app-backend-60nd.onrender.com/add-note",
        "POST",
        {'Authorization': `Bearer ${token}`},
        requestBody
    )
    console.log(data)
    fetchNotes()
  }



  useEffect(() => {
    fetchNotes()
  },[])



  return (
    <>
    {isLoading && <LoadingSpinner show={isLoading} />}
    {!isLoading && errorStatus && <Modal show={errorStatus} content={errorStatus} onCancel={clearError} />}
      <Container>
          <NoteInputForm noteSubmitHandler={noteSubmitHandler} />
          <NoteList
            items={notes}
            deleteNote={deleteNote}
            checkNote={checkNote}
            className={""}
          />
      </Container>
    </>
  )
}
