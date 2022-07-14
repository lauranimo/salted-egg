import React, { useState } from "react"
import '../components/index.css'
import WidgetMenu from "./menu/WidgetMenu";
import Widget from "../components/Widget";
import TaskHeader from "../components/todo/TaskHeader"
import Tasks from '../components/todo/Tasks';
import AddTask from '../components/todo/AddTask';
import Time from '../components/background/Time';
import cafeAnimation from "../images/cafe-animation.mp4"
import AllSounds from '../components/bg-sound/AllSounds';
import Timer from "../components/timer/Timer";
import { FaBars } from 'react-icons/fa'

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false);

    // For adding widgets to scrren from menu
    const [showTodo, setShowTodo] = useState(false);
    const [showSound, setShowSound] = useState(false);
    const [showTimer, setShowTimer] = useState(false);

    // For setting zIndex on click- very faulty right now Edit: actually it just doesn't work LOL
    const [todoFocus, setTodoFocus] = useState(false);
    const [soundFocus, setSoundFocus] = useState(false);
  
    // We need the tasks variable across components- can't declare inside just one
    const [showForm, setShowForm] = useState(false)
    const [tasks, setTasks] = useState([])
  
    // Show Menu
    const showWidgetMenu = () => {
        setShowMenu(!showMenu);
    }

    // Show Todo Widget
    const showTodoWidget = () => {
        setShowTodo(!showTodo);
    }

    // Show Sound Widget
    const showSoundWidget = () => {
        setShowSound(!showSound);
    }

    // Show Timer Widget
    const showTimerWidget = () => {
        setShowTimer(!showTimer);
    }

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
    <div>
        <FaBars title="Menu" id='menu-icon' onClick={showWidgetMenu}></FaBars>
        {showMenu && <WidgetMenu
        showMenu = {showWidgetMenu}
        showTodo = {showTodoWidget}
        showSound = {showSoundWidget}
        showTimer = {showTimerWidget}>
        </WidgetMenu>}

        {showTodo && <Widget id = {'todo-widget'}
            container = {
                <button className={`todo-container ${todoFocus ? 'focus' : ''}`}  onClick={() => setTodoFocus(!todoFocus)}>
                    <TaskHeader onAdd={() => setShowForm(!showForm)}
                    showForm={showForm}/>
                    {showForm && <AddTask onAdd={addTask}/>}
                    <Tasks tasks = {tasks}
                    onDelete = {deleteTask}
                    onToggle = {toggleimportant}/>     
                </button>}
            showWidget = {showTodoWidget}>
        </Widget>}

        <div className='centerpiece'>
            <video autoPlay loop muted id='animation'>
            <source src={cafeAnimation} type='video/mp4'/>
            </video>      
            <div className="greetings-container">
                <Time/>
            </div>
        </div>

        {showSound && <Widget id = {'sounds-widget'}
            container = {
                <button className={`sounds-container ${soundFocus ? 'focus' : ''}`}  onClick={() => setSoundFocus(!soundFocus)}>
                    <header className='header'>
                        <h1>Sounds</h1>
                    </header>
                    <AllSounds/>
                </button>}
            showWidget = {showSoundWidget}>
        </Widget> }

        {showTimer && <Widget id = {'timer-widget'}
            container = {
                <button className={'timer-container'}><Timer/></button>}
            showWidget = {showTimerWidget}>
        </Widget>}

    </div>
  )
}

export default Layout