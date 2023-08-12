import React, {useReducer} from 'react'

const initialValue = {value: '', isTouched: false}

const inputReducer = (state, action) => {
    switch (action.type){
        case "CHANGE_INPUT":
            return {...state, value: action.value};
        case "BLUR_INPUT":
            return {...state, isTouched: true};
        case "RESET":
            return initialValue
        default:
            return state
    }
}

export default function useInput(validator) {

    const [inputState, dispatch] = useReducer(inputReducer, initialValue)

    let inputInvalid
    inputInvalid = validator(inputState.value) && inputState.isTouched

    const inputChangeHandler = (event) => {
        dispatch({type: "CHANGE_INPUT", value: event.target.value})
    }

    const blurHandler = () => {
        dispatch({type: "BLUR_INPUT"})
    }

    const resetInput = () => {
        dispatch({type: "RESET"})
    }

  return {inputInvalid, inputValue: inputState.value, inputState, blurHandler, inputChangeHandler, resetInput}
}
