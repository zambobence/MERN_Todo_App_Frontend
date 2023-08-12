import React, { useContext, useEffect } from 'react'
import AuthenticationInputForm from '../components/AuthenticationForm'
import AuthContext from '../../shared/context/auth-context'
import { useNavigate } from 'react-router-dom'
export default function Authentication(props) {

  /*
  const navigate = useNavigate()
  const {isLoggedIn} = useContext(AuthContext)
  useEffect(() => {
    if (isLoggedIn){
      navigate('/')
    }
    else {
      navigate('/authenticate')
    }
  },[isLoggedIn, navigate])
*/
  return (
    <div>
      <AuthenticationInputForm />
    </div>
  )
}
