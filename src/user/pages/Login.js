import React from 'react'
import AuthenticationInputForm from '../components/AuthenticationForm'

export default function Login(props) {
  return (
    <div>Login
      <AuthenticationInputForm
        handleLogin={props.handleLogin}
        handleRegister={props.handleRegister}
      />
    </div>
  )
}
