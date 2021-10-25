import Task from './Task'

function TaskList ({ listTask, setListTask }) {
  const onChangeStatus = (e) => {
    const { id, checked } = e.target
    const newListTask = listTask.map(
      task => ({ ...task, done: task.id === id ? checked : task.done })
    )
    setListTask(newListTask)
  }

  const handleClearButton = () => {
    const newListTask = listTask.filter((task) => task.done === false)
    setListTask(newListTask)
  }

  return (
    <div className='task-list'>
      {listTask.map((task) => <Task labelTask={task.text} key={task.id} id={task.id} onChangeStatus={onChangeStatus} done={task.done} />)}
      <button
        className='clearCompletedBtn'
        disabled={listTask.length ? '' : 'disabled'}
        onClick={handleClearButton}
      >Delete All Done
      </button>
    </div>
  )
}

export default TaskList
