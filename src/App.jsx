import React from 'react'

function App() {

  return (
    <div className='h-screen gap-1 bg-slate-900 grid place-content-center'>
      <div className="relative">
        <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur"></div>
      <button className="px-7  relative bg-black rounded-lg loading-none flex items-center py-2 divide-x divide-gray-600">
        <span className="text-gray-100 pr-6">Labs realease</span>
        <span className="text-indigo-400 pl-6">SUBMIT</span>
      </button>
      </div>
    </div>
  )
}

export default App
