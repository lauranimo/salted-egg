import React from 'react'
import { useState } from "react"
import Draggable from "react-draggable";
import TaskHeader from "../components/todo/TaskHeader"
import Tasks from '../components/todo/Tasks';
import '../components/index.css'
import AddTask from '../components/todo/AddTask';
import AllSounds from '../components/bg-sound/AllSounds';
import Time from '../components/background/Time';

function Index() {
  // We need the tasks variable across components- can't declare inside just one
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([])

  // Add Task- might generate same number lol
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
      <div className="greetings-container">
          <Time/>
        </div>
      <Draggable>
        <div className='sounds-container'>
          <header className='header'>
            <h1>Sounds</h1>
          </header>
          <AllSounds/>
        </div>
      </Draggable>

    </main>
  )
}

export default Index