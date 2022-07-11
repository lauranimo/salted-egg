import React from 'react'

const Button = ({ color, text, onClick, minWidth}) => {
  return (
    <button onClick={onClick}
        style= {{ backgroundColor: 'rgba(117, 12, 0, 1)', minWidth: { minWidth }}}
        className= 'btn'>
            {text}
    </button>
  )
}


export default Button