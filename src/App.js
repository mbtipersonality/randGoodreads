import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * (5181 - 1 + 1) + 1 )]
    
    window.location = `https://www.google.com/search?q=site%3Agoodreads.com+popular+${randSearch}+books&sca_esv=e84d3365b4113c52&ei=1RphZ7ecHKfMseMP5ov8qAE&ved=0ahUKEwj32s6dl66KAxUnZmwGHeYFHxUQ4dUDCA8&uact=5&oq=site%3Agoodreads.com+a+books&gs_lp=Egxnd3Mtd2l6LXNlcnAiGnNpdGU6Z29vZHJlYWRzLmNvbSBhIGJvb2tzSP_IAVCWDVijyAFwAngAkAEBmAGnAqAByAuqAQUwLjMuNLgBA8gBAPgBAZgCAKACAJgDAIgGAZIHAKAHuwI&sclient=gws-wiz-serp`
    // window.location = `https://yewtu.be/search?q=${randSearch}`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
