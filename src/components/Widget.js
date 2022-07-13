import React, { useState } from 'react'
import Draggable from "react-draggable";

const Widget = ( props ) => {
    const [close, setClose] = useState("no-display-close");

    const showClose = (e) => {
        e.preventDefault();
        setClose("display-close");
    }

    const hideClose = (e) => {
        e.preventDefault();
        setClose("no-display-close");
    }

  return (
    // Later when you have the delete function, switch with Button component!!!
    <Draggable>
        <button id= {props.id}
        onMouseEnter={(e) => showClose(e)}
        onMouseLeave={(e) => hideClose(e)}>
            <div>{props.container}</div>
            <button className= {close}>X</button>
        </button>
    </Draggable>
  )
}

export default Widget