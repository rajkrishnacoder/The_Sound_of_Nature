import React from 'react'
import { useForm } from 'react-hook-form'
import { GroupCard, PlayCard, Header } from './component'


function App() {


  return (
    <div className="h-screen relative bg-gradient-to-b from-black to-green-700 ">
      <Header/>
      <div className='mt-60'>
       <GroupCard/>
      </div>
      <div className='w-full fixed bottom-0'>
        <PlayCard/>
      </div>
    </div>
  )
}

export default App
