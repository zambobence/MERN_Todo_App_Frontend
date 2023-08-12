import React from 'react'
import Input from '../../shared/components/Input'
import useInput from '../../shared/hooks/use-input'
import Button from '../../shared/components/Button'
import Icon from '../../shared/components/Icon'
import './NoteInputForm.css'

export default function NoteInputForm(props) {

    const {inputInvalid, inputValue,  blurHandler, inputChangeHandler, resetInput} = useInput((value)=>value.trim() ==="")

    const submitForm = (event, formData) => {
        event.preventDefault()
        props.noteSubmitHandler({text: inputValue})
        resetInput()
    }

    return (
        <div className={'note-input-form'}>
            <form
                onSubmit={submitForm}
                className={`flex${props.className ? props.className : ""}`}
            >
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
                <Button disabled={inputInvalid} type='submit'>
                    <Icon>+</Icon>
                </Button>
            </form>
        </div>
    )
}
