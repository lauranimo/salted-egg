import React from 'react'


const WidgetMenu = ( props ) => {

   return (
    <div className='widget-menu'>
        <button className='todo-add-btn' onClick={props.showTodo}>ToDo</button>
        <button className='sounds-add-btn' onClick={props.showSound}>BG-Sounds</button>
        <button className='timer-add-btn' onClick={props.showTimer}>Timer</button>


    </div>
  )
}

export default WidgetMenu