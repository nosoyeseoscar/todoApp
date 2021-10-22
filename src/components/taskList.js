import Task from './Task'

function TaskList () {
  return (
    <div className='task-list'>
      <Task labelTask='Primera Tarea' />
      <Task labelTask='Segunda Tarea' />
      <Task labelTask='Tercera Tarea: configurar y acomodar los labels de los checkboxes, se ven muy feos y no son estéticos' />
      <button className='clearCompletedBtn'>Delete All Done</button>
    </div>
  )
}

export default TaskList
