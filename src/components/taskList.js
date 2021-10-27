import { useState, useEffect } from 'react'
import Task from './Task'

function TaskList ({ listTask, setListTask }) {
  const [isDoneTask, setIsDoneTask] = useState(false)
  useEffect(() => {
    listTask.find((task) => task.done === true) ? setIsDoneTask(true) : setIsDoneTask(false)
  }, [listTask])
  const onChangeStatus = (e) => {
    const { id, checked } = e.target
    const newListTask = listTask.map(
      /* meter condicional de checked para cambiar bandera doneTask */
      task => ({ ...task, done: task.id === id ? checked : task.done })
    )
    setListTask(newListTask)
  }

  const handleClearButton = () => {
    const newListTask = listTask.filter((task) => task.done === false)
    setListTask(newListTask)
  }

  const availableTaskList = () => {
    return (
      <div>
        {listTask.map((task) =>
          <Task
            labelTask={task.text}
            key={task.id} id={task.id}
            onChangeStatus={onChangeStatus}
            done={task.done}
          />)}
        <button
          className='clearCompletedBtn'
          disabled={isDoneTask ? '' : 'disabled'}
          onClick={handleClearButton}
        >Delete All Done
        </button>
      </div>
    )
  }

  const emptyTaskList = () => {
    return (
      <div>
        <h3>There's no tasks Today</h3>
      </div>
    )
  }

  return (
    <div className='task-list'>
      {
        listTask.length ? availableTaskList() : emptyTaskList()
      }
    </div>
  )
}

export default TaskList
