import { useState } from 'react'
import AddTaskForm from './addTaskForm'
import TaskList from './taskList'

function Container () {
  const [listTask, setListTask] = useState([])

  const handleNewTask = newTask => {
    setListTask([...listTask, newTask])
  }

  /* const handleDoneTask = doneTask => {
    setListTask(listTask.filter((task) => task !== doneTask))
  } */

  return (
    <div className='container'>
      <AddTaskForm handleNewTask={handleNewTask} />
      <TaskList listTask={listTask} />
    </div>
  )
}

export default Container
