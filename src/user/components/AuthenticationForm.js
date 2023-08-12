import React, { useContext, useState } from "react"
import Input from "../../shared/components/Input"
import useInput from "../../shared/hooks/use-input"
import Container from "../../shared/components/Container"
import Button from "../../shared/components/Button"
import AuthContext from "../../shared/context/auth-context"
import useHttpClient from "../../shared/hooks/use-http"
import LoadingSpinner from "../../shared/components/LoadingSpinner"
import Modal from "../../shared/components/Modal"

export default function AuthenticationInputForm(props) {

  const authCtx = useContext(AuthContext)
  const [loginMode, setLoginMode] = useState(true)
  const {isLoading, errorStatus, sendRequest, clearError} = useHttpClient()

    const switchModeHandler = () => {
        setLoginMode(prevState => !prevState)
    }

  const {
    inputInvalid: emailInputInvalid,
    inputValue: emailInputValue,
    blurHandler: emailInputBlurHandler,
    inputChangeHandler: emailInputChangeHandler
  } = useInput((value) => !value.includes("@"))

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

  const authenticationSubmitHandler = async (event) => {
    event.preventDefault()
    clearError()
    if (loginMode){
      try {
        const responseData = await sendRequest(
          "https://mern-todo-app-backend-60nd.onrender.com/login",
          "POST",
          {},
          {
            email: emailInputValue,
            password: passwordInputValue
          },
        )
        console.log(responseData)
        authCtx.login(responseData?.user, responseData?.token)
      } catch(err){}
    } else {
      try {
        const responseData = await sendRequest(
          "https://mern-todo-app-backend-60nd.onrender.com/register",
          "POST",
          {},
          {
            email: emailInputValue,
            password: passwordInputValue,
            confirmPassword: confirmPasswordInputValue
          },
        )
        console.log(responseData)
        authCtx.login(responseData?.user, responseData?.token)
      } catch(err){
      }
    }
  }

  return (
    <>
    {isLoading && <LoadingSpinner show={isLoading} />}
    {!isLoading && errorStatus && <Modal show={errorStatus} content={errorStatus} onCancel={clearError} />}
    <Container>
      <form
        onSubmit={authenticationSubmitHandler}
        className={"center"}
      >
        <Input
          id={"email"}
          label={"Email"}
          labelEnabled
          className={""}
          inputInvalid={emailInputInvalid}
          error="Please provide a valid email."
          input={{
            value: emailInputValue,
            type: "email",
            onBlur: emailInputBlurHandler,
            onChange: emailInputChangeHandler
          }}
        />

        <Input
          id={"password"}
          label={"Password"}
          labelEnabled
          className={""}
          inputInvalid={passwordInputInvalid}
          error="Please provide a valid password."
          input={{
            value: passwordInputValue,
            type: "password",
            onBlur: passwordInputBlurHandler,
            onChange: passwordInputChangeHandler
          }}
        />

      {!loginMode && (

          <Input
            id={"confirmPassword"}
            label={"Confirm Password"}
            labelEnabled
            className={""}
            inputInvalid={confirmPasswordInputInvalid}
            error="Please provide a valid confirmPassword."
            input={{
              value: confirmPasswordInputValue,
              type: "password",
              onBlur: confirmPasswordInputBlurHandler,
              onChange: confirmPasswordInputChangeHandler
            }}
          />

            )}
        {loginMode ?
          <Button disabled={loginFormInvalid} type="submit" className="center" style={{marginTop: '.5rem'}}>
            Login
          </Button>
          :
          <Button disabled={registerFormInvalid} type="submit" className="center" style={{marginTop: '.5rem'}}>Register</Button>
          }
      </form>
    <Button type="button" onClick={switchModeHandler} className="center" style={{marginTop: '.5rem'}} inverse>Switch to {loginMode ? "register" : "login"}</Button>
    </Container>
  </>
  )
}
