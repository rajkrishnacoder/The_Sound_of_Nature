import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {GroupCard} from './component'


function App() {


  return (
    <div className="h-screen bg-auto bg-gradient-to-b from-black to-green-700  flex justify-center items-center">
      <GroupCard/>
    </div>
  )
}

export default App
