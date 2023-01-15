export default function TaskList(props) {

    const { taskList, removeTask } = props

    return (
        <div>
            {taskList.map((element) => (
                <div key={element.id}>
                    {element.text}
                    <input type="checkbox" />
                    <button type="button" onClick={() => { removeTask(element.id) }}>-</button>
                </div>
            ))}
        </div>
    )
}