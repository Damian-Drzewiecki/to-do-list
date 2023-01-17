import "./TaskList.css"
export default function TaskList(props) {

    const { taskList, removeTask, checkTask } = props

    return (
        <div className="container">
            {taskList.map((element) => (
                <div key={element.id} className="taskBox">
                    <input className="taskCheckbox" type="checkbox" checked={element.isChecked} onChange={(event) => { checkTask(element.id) }} />
                    {element.text}
                    <button className="taskButton" type="button" onClick={() => { removeTask(element.id) }}>-</button>
                </div>
            ))}
        </div>
    )
}