import React from 'react'
import { useForm } from 'react-hook-form'
import { GroupCard, PlayCard } from './component'


function App() {


  return (
    <div className="h-screen relative bg-gradient-to-b from-black to-green-700 flex justify-center items-center flex-col">
      <div>
       <GroupCard/>
      </div>
      <div className='w-full absolute inset-x-0 bottom-0'>
        <PlayCard/>
      </div>
    </div>
  )
}

export default App
