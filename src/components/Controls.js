import React, { useState } from 'react'

export default function Controls(props) {
    const addName = props.setList
    const list = props.list
    const setHistory = props.setstateHistory
    const stateHistory = props.stateHistory

    const [stateControls, setstateControls] = useState({
        promptTrue: false,
        nameText: ""
    })

    const handleChange = (e) => {
        setstateControls({ ...stateControls, [e.target.name]: e.target.value })
    }

    const submitText = (e) => {
        e.preventDefault()
        if (stateControls.nameText.length > 0) {
            setHistory(list)
            addName([...list, stateControls.nameText])
            setstateControls({
                nameText: "",
                promptTrue: false
            })
        }
    }

    const undo = () => {
        addName(stateHistory)
    }

    const promptInput = () => {
        return (
            <form className="FormLabel">
                <label>New Text</label>
                <input
                    type='text'
                    id='text'
                    name='nameText'
                    value={stateControls.nameText}
                    onChange={handleChange} />
                <button
                    className="ButtonSend"
                    type="submit"
                    onClick={submitText}
                >Send</button>
            </form>
        )
    }

    return (
        <div className="ButtonContainer">
            <div>
                <button
                    className="Button"
                    onClick={() => setstateControls({ ...stateControls, promptTrue: !stateControls.promptTrue })}
                >+</button>
                {stateHistory.length > 0
                    ? <button
                        className="Button"
                        onClick={() => undo()}
                    >&#9100;</button>
                    : null}
            </div>
            <div>
                {(stateControls.promptTrue) ? promptInput() : null}
            </div>
        </div>
    )

}