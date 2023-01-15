import { useState } from "react";

export default function TaskInput(props) {
    const [inputValue, setInputValue] = useState('')
    const { addNewTask } = props
    const onClick = () => {
        addNewTask(inputValue)
        setInputValue("")
    }

    return (
        <div>
            <input type="text" value={inputValue} placeholder="new task..." onChange={(event) => setInputValue(event.target.value)}></input>
            <button disabled={inputValue === ""} onClick={onClick}> Add</button>
        </div >
    )
}