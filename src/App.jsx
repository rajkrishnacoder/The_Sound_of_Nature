import React from 'react'
import { PlayCard, Header } from './component'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <div className="relative bg-gradient-to-b from-blue-800 to-green-900">
    <div className='sticky top-0'><Header/></div>
    <Outlet/>
    <div className='w-full fixed bottom-0'><PlayCard/></div>
    </div>
    
    
  )
}

export default App
