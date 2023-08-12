import React, {useContext} from 'react'
import Container from '../../shared/components/Container'
import AuthContext from '../../shared/context/auth-context'
import useHttpClient from '../../shared/hooks/use-http'
import LoadingSpinner from '../../shared/components/LoadingSpinner'
import Modal from '../../shared/components/Modal'
import ProfileComponent from '../components/ProfileComponent'

export default function Profile() {
  const authCtx = useContext(AuthContext)
  const {isLoading, errorStatus, sendRequest, clearError} = useHttpClient()

  const deleteUser = async () => {
    const responseData = await sendRequest(
      "https://mern-todo-app-backend-60nd.onrender.com/user",
      "DELETE",
      {"Authorization": `Bearer ${authCtx.token}`}
    )
    console.log(responseData)
    authCtx.logout()
  }

  return (
    <>
     {isLoading && <LoadingSpinner show={isLoading} />}
    {!isLoading && errorStatus && <Modal show={errorStatus} content={errorStatus} onCancel={clearError} />}

    <div>Profle
        <Container>
            <ProfileComponent handleDelete={deleteUser} />
        </Container>
    </div>
    </>
  )
}
