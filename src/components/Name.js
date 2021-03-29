import React, { useState } from 'react'

export default function Name(props) {

    const [stateSelect, setStateSelect] = useState([])
    const text = props.text
    const delText = props.delete

    return (
        <option
            value={text}
            onDoubleClick={() => delText(props.id)}
            onClick={() => setStateSelect([...stateSelect, props.id])}
        >{text}
        </option>
    )
}