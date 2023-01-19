import classNames from "classnames";
import { useState, useEffect, useCallback } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import "./ToDoPage.css"

const FILTER_TYPE = { ALL: "all", COMPLETED: "Completed", UNCOMPLETED: "Uncompleted" }

export default function ToDo() {
    const [id, setId] = useState(0)
    const [filteredTasks, setFilteredTasks] = useState([])
    const [tasks, setTasks] = useState([
        { id: 99, text: "umyć psa", isChecked: false },
        { id: 98, text: "kupić ziemniaki", isChecked: true },
        { id: 97, text: "siaba daba", isChecked: true },
        { id: 96, text: "uczala pumpa", isChecked: false },
        { id: 95, text: "kalaki klanki", isChecked: false }
    ])
    const [filterState, setFilterState] = useState(FILTER_TYPE.ALL)

    useEffect(() => {
        if (filterState === FILTER_TYPE.UNCOMPLETED) {
            setFilteredTasks(tasks.filter((element) => element.isChecked === false))
        }
        if (filterState === FILTER_TYPE.COMPLETED) {
            setFilteredTasks(tasks.filter((element) => element.isChecked === true))
        }
        if (filterState === FILTER_TYPE.ALL) {
            setFilteredTasks(tasks)
        }
    }, [filterState, tasks])

    const addNewTask = useCallback((userInputText) => {
        setTasks((prevTasks) => [...prevTasks, { id: id, text: userInputText, isChecked: false }])
        setId((prevId) => prevId + 1)
    }, [id])

    const removeTask = useCallback((idToRemove) => {
        setTasks((prevTasks) => prevTasks.filter((element) => element.id !== idToRemove))
    }, [])

    const checkTask = useCallback((idToCheck) => {
        setTasks((prevTasks) => prevTasks.map((element) => element.id === idToCheck ? { ...element, isChecked: !element.isChecked } : element))
    }, [])

    console.log(tasks)
    return (

        <>
            <div className="filterButtonsBox">
                <button
                    className={classNames("filterButtonAll", { currentFilterButton: filterState === FILTER_TYPE.ALL })}
                    type="button"
                    onClick={() => { setFilterState(FILTER_TYPE.ALL) }}>All
                </button>

                <button
                    className={classNames("filterButtonCompleted", { currentFilterButton: filterState === FILTER_TYPE.COMPLETED })}
                    type="button"
                    onClick={() => { setFilterState(FILTER_TYPE.COMPLETED) }}>Completed
                </button>

                <button
                    className={classNames("filterButtonUncompleted", { currentFilterButton: filterState === FILTER_TYPE.UNCOMPLETED })}
                    type="button"
                    onClick={() => { setFilterState(FILTER_TYPE.UNCOMPLETED) }}>Uncompleted
                </button>

            </div>
            <TaskInput addNewTask={addNewTask} />
            <TaskList taskList={filteredTasks} removeTask={removeTask} checkTask={checkTask} />
        </>
    )
}