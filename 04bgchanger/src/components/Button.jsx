import React from 'react'

function Button({buttonName, setColor}) {
    const changeBgColor = () =>{
        setColor({buttonName})
    }
  return (
    <button onClick={changeBgColor}>{buttonName}</button>
  )
}

export default Button