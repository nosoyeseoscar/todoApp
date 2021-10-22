import Task from './Task'

function TaskList ({ listTask }) {
  return (
    <div className='task-list'>
      {listTask.map((task) => <Task labelTask={task.text} key={task.id} done={task.done} />)}
      <button
        className='clearCompletedBtn'
        disabled={listTask.length ? '' : 'disabled'}
      >Delete All Done
      </button>
    </div>
  )
}

export default TaskList
