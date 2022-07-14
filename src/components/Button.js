import React from 'react'

// Kind of didn't need this but made for practice so it's used in some components
const Button = ({ text, onClick, minWidth }) => {
  return (
    <button onClick={onClick}
        style= {{ backgroundColor: 'rgba(117, 12, 0, 1)', minWidth: { minWidth }}}
        className= 'btn'>
            {text}
    </button>
  )
}

export default Button