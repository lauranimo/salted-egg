import React from 'react'
import { FaBars, FaMusic, FaClock, FaCheckDouble, FaSpotify } from 'react-icons/fa'

const WidgetMenu = ( props ) => {

   return (
    // <div className='menu-container'>
        
        <div className='widget-menu'>
        <FaBars title='Menu' id='menu-icon' onClick={props.showMenu}></FaBars>
        <h1>Widget Menu</h1>
       
        <div className='menu-buttons'>
            <div id='btn-category'>
                <h2>Audio</h2>
                <FaMusic title='Background Sounds' id='add-btn' onClick={props.showSound} ></FaMusic>
                <FaSpotify title='Spotify' id='add-btn' onClick={props.showSound} ></FaSpotify>
            </div>
            <div id='btn-category'>
            <   h2>Time</h2>
                <FaCheckDouble title='Todo List' id='add-btn' onClick={props.showTodo}>ToDo</FaCheckDouble>
                <FaClock title='Timer' id='add-btn' onClick={props.showTimer}>Timer</FaClock>
            </div>
            
        </div>

    </div>
    // </div>

  )
}

export default WidgetMenu