import './App.css'
import React from 'react'

function App() {
  const handleClick = () => {
    
    window.location = `https://www.reddit.com/r/randnsfw/`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
