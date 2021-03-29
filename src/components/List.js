import React from 'react'
import { useForm } from 'react-hook-form'
import Name from './Name'

export default function List(props) {

    const list = props.stateList
    const setList = props.setList
    const setstateHistory = props.setstateHistory
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        setstateHistory(list)
        const newList = list.filter(el => !data.textsSelect.includes(el))
        setList(newList)
    }

    const deleteText = (elementIndex) => {
        setstateHistory(list)
        setList(list.filter((el, index) => index !== elementIndex))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="FormContainer">
            <select className="ListContainer" name="textsSelect" ref={register} multiple>
                {list.map((element, index) => <Name key={index} text={element} id={index} delete={deleteText} />)}
            </select>
            <button
                className="Button"
                type="submit"
            > -
            </button>
        </form>
    )
}