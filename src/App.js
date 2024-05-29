import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]
    
    window.location = `https://www.google.com/search?q=site%3Amenshealth.com/style+${randSearch}&sca_esv=44f1fb0a97cf7ff0&sca_upv=1&ei=a88bZqmBOJGE4-EPgYKxiA4&ved=0ahUKEwjp4oHO3cGFAxURwjgGHQFBDOEQ4dUDCBA&uact=5&oq=site%3Amenshealth.com+a&gs_lp=Egxnd3Mtd2l6LXNlcnAiFXNpdGU6bWVuc2hlYWx0aC5jb20gYUiqjAhQAFgAcAR4AJABAJgBAKABAKoBALgBA8gBAJgCAKACAJgDAIgGAZIHAKAHAA&sclient=gws-wiz-serp`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
