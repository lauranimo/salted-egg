import React, { useState } from 'react'

const CloseButton = () => {
    const [display, setDisplay] = useState("not-displayed");
    const showClose = (e) => {
        e.preventDefault();
        setDisplay("displayed");
    }

    const hideClose = (e) => {
        e.preventDefault();
        setDisplay("not-displayed");
    }

  return (
    <button className={display}>TEST</button>
  )
}

export default CloseButton