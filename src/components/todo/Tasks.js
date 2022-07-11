import React from 'react'
import MyTask from './MyTask'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
        {tasks.map((task) => (
            <MyTask key= {task.id} task={task}
            onDelete={onDelete}
            onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks