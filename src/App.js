import './App.css'
import React from 'react'
import search1 from './search'

function App() {
  const handleClick = () => {
    // const randSearch = search[Math.floor(Math.random() * (1266 - 1 + 1) + 1 )]
    // const search2 = JSON.parse(localStorage.getItem('selfhelp'))
    // if(!search2){
    //   localStorage.setItem('selfhelp', JSON.stringify(search1))
    //   return
    // }
    // const randSearch = search2[Math.floor(Math.random() * (search2.length - 1 + 1) + 1 )]

    // const newSelfhelp = search2.filter(item => item !== randSearch)
    // localStorage.setItem('selfhelp', JSON.stringify(newSelfhelp))
    // window.location = `https://www.goodreads.com/list/tag?id=${randSearch}`

    const listfromLocal = JSON.parse(localStorage.getItem('list'))
    if (listfromLocal){
      const randomNumber = listfromLocal[Math.floor(Math.random() * listfromLocal.length)];
      const newList = listfromLocal.filter(item => item !== randomNumber)
      localStorage.setItem('list', JSON.stringify(newList))
      window.location = `https://www.goodreads.com/list/book/${randomNumber}`
    }
    else {
      const list = Array.from({ length: 9999997 }, (_, i) => i + 1);
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
