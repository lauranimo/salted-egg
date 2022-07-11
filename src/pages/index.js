import React from 'react'
import { useState } from "react"
import Draggable from "react-draggable";
import TaskHeader from "../components/todo/TaskHeader"
import Tasks from '../components/todo/Tasks';
import '../components/index.css'
import AddTask from '../components/todo/AddTask';

function Index() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() *1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Importantance
  const toggleimportant = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ?
    {...task, important: !task.important} : task))
  }

  return (
    <main>
      <Draggable>
        <div className='todo-container'>
            <TaskHeader onAdd={() => setShowForm(!showForm)}
            showForm={showForm}/>
            {showForm && <AddTask onAdd={addTask}/>}
            <Tasks tasks = {tasks}
              onDelete = {deleteTask}
              onToggle = {toggleimportant}/>
        </div>
      </Draggable>

    </main>
  )
}

export default Index