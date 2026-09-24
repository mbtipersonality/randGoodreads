import './App.css'
import React from 'react'
// import search1 from './search'

function App() {
  const handleClick = () => {
    // const randSearch = search[Math.floor(Math.random() * (1266 - 1 + 1) + 1 )]
   
    const listfromLocal = JSON.parse(localStorage.getItem('list'))
    if (listfromLocal){
      const randomNumber = listfromLocal[Math.floor(Math.random() * listfromLocal.length)];
      const newList = listfromLocal.filter(item => item !== randomNumber)
      localStorage.setItem('list', JSON.stringify(newList))
      window.location = `https://www.goodreads.com/list/book/${randomNumber}`
    }
    else {
      const list = Array.from({ length: 10000 }, (_, i) => i + 1);
      localStorage.setItem('list', JSON.stringify(list))
    } 
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
