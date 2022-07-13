import React, { useState } from "react"
import Widget from "../components/Widget";
import TaskHeader from "../components/todo/TaskHeader"
import Tasks from '../components/todo/Tasks';
import '../components/index.css'
import AddTask from '../components/todo/AddTask';
import Time from '../components/background/Time';
import cafeAnimation from "../images/cafe-animation.mp4"
import AllSounds from '../components/bg-sound/AllSounds';
import Timer from "../components/timer/Timer";


function Index() {
  const [todo, setTodo] = useState(false);
  const [sound, setSound] = useState(false);


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
        <Widget id = {'todo-widget'}
          container = {<button className={`todo-container ${todo ? 'focus' : ''}`}  onClick={() => setTodo(!todo)} key='contain'>
            <TaskHeader onAdd={() => setShowForm(!showForm)}
            showForm={showForm}/>
            {showForm && <AddTask onAdd={addTask}/>}
            <Tasks tasks = {tasks}
              onDelete = {deleteTask}
              onToggle = {toggleimportant}/>     
            </button>}>
        </Widget>
      <div className='centerpiece'>
        <video autoPlay loop muted id='animation'>
          <source src={cafeAnimation} type='video/mp4'/>
        </video>
      </div>
      <div className="greetings-container">
          <Time/>
        </div>
      <Widget id = {'sounds-widget'}
        container = {<button className={`sounds-container ${sound ? 'focus' : ''}`}  onClick={() => setSound(!sound)}>
          <header className='header'>
            <h1>Sounds</h1>
          </header>
          <AllSounds/>
        </button>}>
      </Widget>
      <Widget id = {'timer-widget'}
        container = {<Timer/>}>
        </Widget>
    </main>
  )
}

export default Index