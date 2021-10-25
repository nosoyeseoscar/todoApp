import Task from './Task'

function TaskList ({ listTask, setListTask }) {
  const onChangeStatus = (e) => {
    const { id, checked } = e.target
    console.log(e.target)
    const newListTask = listTask.map(
      task => ({ ...task, done: task.id === id ? checked : task.done })
    )
    console.log(newListTask)
    setListTask(newListTask)
  }

  return (
    <div className='task-list'>
      {listTask.map((task) => <Task labelTask={task.text} key={task.id} id={task.id} onChangeStatus={onChangeStatus} done={task.done} />)}
      <button
        className='clearCompletedBtn'
        disabled={listTask.length ? '' : 'disabled'}
      >Delete All Done
      </button>
    </div>
  )
}

export default TaskList
