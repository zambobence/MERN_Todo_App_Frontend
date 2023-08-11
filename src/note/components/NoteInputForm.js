import React from 'react'
import Input from '../../shared/components/Input'
import useInput from '../../shared/hooks/use-input'
export default function NoteInputForm() {


    const {inputInvalid, inputValue,  blurHandler, inputChangeHandler} = useInput((value)=>value.trim() ==="")

    const submitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <Input
                    id={'note'}
                    className={''}
                    label={'Note'}
                    inputInvalid={inputInvalid}
                    error="Note has to be a least 1 character long"
                    input={{
                        value: inputValue,
                        type: 'text',
                        placeholder: 'Please type a note',
                        onBlur: blurHandler,
                        onChange: inputChangeHandler
                    }}
                />
                <button disabled={inputInvalid} type='submit'>Add note</button>
            </form>
        </div>
    )
}
