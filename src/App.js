import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    // const randSearch = search[Math.floor(Math.random() * (1266 - 1 + 1) + 1 )]
    const randSearch = search[Math.floor(Math.random() * (1042 - 1 + 1) + 1 )]
    
    window.location = `https://www.google.com/search?q=site%3Agoodreads.com+popular+${randSearch}+books&sca_esv=e84d3365b4113c52&ei=Ypr4Z-vhOPKf4-EPy5LsgAQ&ved=0ahUKEwjrmoCOks-MAxXyzzgGHUsJG0AQ4dUDCBA&uact=5&oq=site%3Agoodreads.com+popular+a+books&gs_lp=Egxnd3Mtd2l6LXNlcnAiInNpdGU6Z29vZHJlYWRzLmNvbSBwb3B1bGFyIGEgYm9va3NIgiZQsgJY1h9wAngAkAEAmAGcAqAB6xaqAQYwLjIuMTG4AQPIAQD4AQGYAgCgAgCYAwCIBgGSBwCgB8kEsgcAuAcA&sclient=gws-wiz-serp`
    
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
