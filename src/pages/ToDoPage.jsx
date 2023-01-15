import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
let id = 0;

export default function ToDo() {
    const [tasks, setTasks] = useState([])


    const addNewTask = (userInputText) => {
        setTasks((prevTasks) => [...prevTasks, { id: id++, text: userInputText, isChecked: false }]
        )
    }

    const removeTask = (idToRemove) => {
        setTasks((prevTasks) => prevTasks.filter((element) => element.id !== idToRemove))
    }

    const checkTask = (idToCheck) => {
        setTasks((prevTasks) => prevTasks.map((element) => element.id === idToCheck ? { ...element, isChecked: !element.isChecked } : element))
    }

    return (
        <div>
            <TaskInput addNewTask={addNewTask} />
            <TaskList taskList={tasks} removeTask={removeTask} checkTask={checkTask} />
        </div>
    )
}