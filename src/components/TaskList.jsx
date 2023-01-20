import classNames from "classnames"
import "./TaskList.css"
export default function TaskList(props) {

    const { taskList, removeTask, checkTask } = props
    const onCheck = (elementId, event) => {
        checkTask(elementId)
    }

    return (
        <div className="container">
            {taskList.map((element) => (
                <div key={element.id} className={classNames('taskBox', { taskBoxLine: element.isChecked })} onClick={(event) => { onCheck(element.id, event) }}>
                    <input className="taskCheckbox" type="checkbox" checked={element.isChecked} readOnly />
                    <div className="taskText">{element.text}</div>
                    <button className="taskButton" type="button" onClick={() => { removeTask(element.id) }}></button>
                </div>
            ))}
            {taskList.length === 0 &&
                <div className="jobsDone">
                    No tasks yet
                </div>}
        </div>
    )
}