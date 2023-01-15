export default function TaskList(props) {

    const { taskList, removeTask, checkTask } = props

    return (
        <div>
            {taskList.map((element) => (
                <div key={element.id}>
                    {element.text}
                    <input type="checkbox" checked={element.isChecked} onChange={(event) => { checkTask(element.id) }} />
                    <button type="button" onClick={() => { removeTask(element.id) }}>-</button>
                </div>
            ))}
        </div>
    )
}