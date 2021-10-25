import { useState } from 'react'

function AddTaskForm ({ handleNewTask }) {
  const [newTask, setNewTask] = useState('')

  const handleAddTask = (e) => {
    e.preventDefault()
    handleNewTask(
      {
        id: (+new Date()).toString(),
        text: newTask,
        done: false
      }
    )
  }

  const handleOnChangeAddTask = (e) => {
    setNewTask(e.target.value)
    // console.log(newInputTask)
  }

  return (
    <div className='addTask'>
      <form className='addTaskForm' onSubmit={handleAddTask}>
        <div className='input-text-div'>
          <input type='text' className='input-text' placeholder='Inserta la nueva tarea' onChange={handleOnChangeAddTask} value={newTask} />
        </div>
        <button className='addTaskButton' disabled={newTask ? '' : 'disabled'}>Add</button>
      </form>
    </div>
  )
}

export default AddTaskForm
