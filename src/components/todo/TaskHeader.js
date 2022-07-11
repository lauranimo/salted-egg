import * as React from "react"
import Button from "../Button"

const TaskHeader = ({ onAdd, showForm }) => {


  return (
    <header className="header">
        <h1>To-Do</h1>
        <Button text={showForm ? 'CLOSE' : 'ADD'}
        onClick= {onAdd}/>
    </header>
  )
} 

export default TaskHeader
