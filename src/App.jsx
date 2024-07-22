import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {GroupCard} from './component'


function App() {


  return (
    <div className="h-screen bg-gradient-to-b from-slate-600 via-slate-700 to-slate-900 flex justify-center items-center">
      <GroupCard/>
    </div>
  )
}

export default App
