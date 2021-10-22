function Task (props) {
  const { labelTask, done } = props

  return (
    <div className='task-div'>
      <label className='task-label'><input type='checkbox' className='task-cbox' checked={done} />{labelTask}</label>
    </div>
  )
}

export default Task
