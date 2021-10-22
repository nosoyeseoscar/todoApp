function Task (props) {
  const { labelTask } = props

  return (
    <div className='task-div'>
      <label className='task-label'><input type='checkbox' className='task-cbox' />{labelTask}</label>
    </div>
  )
}

export default Task
