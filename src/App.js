import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * (2995 - 1 + 1) + 1 )]
    
    window.location = 'https://www.google.com/search?q=site%3Agoodreads.com+${randSearch}+books&sca_esv=332c1457e26e21ac&ei=XVlAZ4D0I9WrseMP8IWxyAU&oq=site%3Agoodreads.com+a+books&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIhpzaXRlOmdvb2RyZWFkcy5jb20gYSBib29rc0jhFVCpFVipFXAAeACQAQCYAdYBoAHWAaoBAzItMbgBA8gBAPgBAZgCAKACAJgDAIgGAZIHAKAHLQ&sclient=mobile-gws-wiz-serp'
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
