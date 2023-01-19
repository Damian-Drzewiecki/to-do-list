import { useState } from "react";
import "./TaskInput.css"

export default function TaskInput(props) {
    const [inputValue, setInputValue] = useState('')
    const { addNewTask } = props
    const onClick = () => {
        addNewTask(inputValue)
        setInputValue("")
    }
    const enterSubmit = (event, eventValue) => {
        if (event === "Enter" && eventValue !== "") onClick();
    }

    return (
        <div className="taskInputBox">
            <input
                className="taskInput"
                type="text"
                value={inputValue}
                placeholder="Type your task..."
                onKeyDown={(event) => enterSubmit(event.key, event.target.value)}
                onChange={(event) => setInputValue(event.target.value)}>
            </input>

            <button className="buttonAddTask" disabled={inputValue === ""} onClick={onClick}>+</button>
        </div >
    )
}