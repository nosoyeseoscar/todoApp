function AddTaskForm () {
  return (
    <div className='addTask'>
      <form className='addTaskForm'>
        <div className='input-text-div'>
          <input type='text' className='input-text' />
        </div>
        <button className='addTaskButton'>Add</button>
      </form>
    </div>
  )
}

export default AddTaskForm
