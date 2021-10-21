import Task from './Task'

function TaskList () {
  return (
    <div className='task-list'>
      <Task />
      <Task />
      <Task />
      <button>Delete All Done</button>
    </div>
  )
}

export default TaskList
