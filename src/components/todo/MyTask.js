import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

const MyTask = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.important ? 'important' : ''}`}
    onDoubleClick={() => onToggle(task.id)}
    role='button'
    tabIndex='0'>
        <h6>
            {task.text}
            <FaTimesCircle style ={{
                    color: 'rgba(117, 12, 0, 1)', cursor: 'pointer', fontSize: '18px'}}
                    onClick={() => onDelete(task.id)} />
        </h6>
        <p>{task.time}</p>
    </div>

  )
}

export default MyTask