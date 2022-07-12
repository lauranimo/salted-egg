import React from 'react'
import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [important, setimportant] = useState(false)

    // Calls the AddTask function in index.js, passing an obj containing needed info as the task
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, time, important })

        setText('')
        setTime('')
        setimportant(false)
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <h3>Task</h3>
                <input type='text' 
                placeholder='Add Task'
                value={text}
                onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <h3>Time</h3>
                <input type='text' 
                placeholder='Add Time'
                value={time}
                onChange={(e) => setTime(e.target.value)}/>
            </div>
            <div className='form-control'>
                <h3>Important:</h3>
                <input type='checkbox' className='check-important'
                checked={important}
                value={important}
                onChange={(e) => setimportant(e.target.checked)}/>

            </div>

            <input type="submit" value='Add Task' 
            className='btn btn-submit'/>
        </form>
  )
}

export default AddTask