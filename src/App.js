import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * (2995 - 1 + 1) + 1 )]
    
    window.location = `https://www.google.com/search?q=site%3Agoodreads.com+${randSearch}&sca_esv=e84d3365b4113c52&ei=oHsuZ4u2OuaMnesP5sLToAI&ved=0ahUKEwiLhrOv0M2JAxVmRmcHHWbhFCQQ4dUDCA8&uact=5&oq=site%3Agoodreads.com+a&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHNpdGU6Z29vZHJlYWRzLmNvbSBhSPYYUIUKWIwQcAV4AJABAJgBzQGgAfcFqgEFMC4yLjK4AQPIAQD4AQGYAgCgAgCYAwCIBgGSBwCgB7QB&sclient=gws-wiz-serp`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
