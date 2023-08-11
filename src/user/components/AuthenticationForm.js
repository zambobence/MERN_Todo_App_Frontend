import React, { useState } from 'react'
import Input from '../../shared/components/Input'
import useInput from '../../shared/hooks/use-input'
import Container from '../../shared/components/Container'
import Button from '../../shared/components/Button'

export default function AuthenticationInputForm(props) {

    const [loginMode, setLoginMode] = useState(true)

    const switchModeHandler = () => {
        setLoginMode(prevState => !prevState)
    }

  const {
    inputInvalid: emailInputInvalid,
    inputValue: emailInputValue,
    blurHandler: emailInputBlurHandler,
    inputChangeHandler: emailInputChangeHandler
  } = useInput((value) => !value.includes('@'))

  const {
    inputInvalid: passwordInputInvalid,
    inputValue: passwordInputValue,
    blurHandler: passwordInputBlurHandler,
    inputChangeHandler: passwordInputChangeHandler
  } = useInput((value) => value.length < 5)

  const {
    inputInvalid: confirmPasswordInputInvalid,
    inputValue: confirmPasswordInputValue,
    blurHandler: confirmPasswordInputBlurHandler,
    inputChangeHandler: confirmPasswordInputChangeHandler
  } = useInput((value) => value.length < 5)

  let loginFormInvalid = true
  let registerFormInvalid = true

  loginFormInvalid = emailInputInvalid || passwordInputInvalid
  registerFormInvalid = emailInputInvalid || passwordInputInvalid || confirmPasswordInputInvalid


  const handleSubmit = (event) => {
    event.preventDefault()
    if (loginMode){
        props.handleLogin({email: emailInputValue, password: passwordInputValue})
    }
    else {
        props.handleRegister({email: emailInputValue, password: passwordInputValue, confirmPassword: confirmPasswordInputValue})
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} className='center'>
        <Input
          id={'email'}
          className={''}
          label={'Email'}
          inputInvalid={emailInputInvalid}
          error="Please provide a valid email."
          input={{
            value: emailInputValue,
            type: 'email',
            onBlur: emailInputBlurHandler,
            onChange: emailInputChangeHandler
          }}
        />
        <Input
          id={'password'}
          className={''}
          label={'Password'}
          inputInvalid={passwordInputInvalid}
          error='Please provide a valid password.'
          input={{
            value: passwordInputValue,
            type: 'password',
            onBlur: passwordInputBlurHandler,
            onChange: passwordInputChangeHandler
          }}
        />
      {!loginMode && (
        <Input
          id={'confirmPassword'}
          className={''}
          label={'Confirm Password'}
          inputInvalid={confirmPasswordInputInvalid}
          error='Please provide a valid confirmPassword.'
          input={{
            value: confirmPasswordInputValue,
            type: 'confirmPassword',
            onBlur: confirmPasswordInputBlurHandler,
            onChange: confirmPasswordInputChangeHandler
          }}
        />)}
        {loginMode ?
          <Button disabled={loginFormInvalid} type='submit'>
            Login
          </Button>
          :
          <Button disabled={registerFormInvalid} type='submit'>Register</Button>
        }
      </form>
    <Button type="button" onClick={switchModeHandler}>Switch to {loginMode ? "register" : "login"}</Button>
    </Container>
  )
}
