function Task (props) {
  const { labelTask, id, onChangeStatus, done } = props

  return (
    <div className='task-div'>
      <label
        className={done ? 'task-label-checked' : 'task-label'}
      >
        <input type='checkbox' className='task-cbox' onClick={onChangeStatus} id={id} />
        {labelTask}
      </label>
    </div>
  )
}

export default Task
