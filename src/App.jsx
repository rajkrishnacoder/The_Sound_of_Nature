import React, { useState } from 'react'


function App() {
  const [data1, setData1] = useState(null)

  function submit(event){
    event.preventDefault()
    const data = new FormData(event.target)
    let helper = {}
    data.forEach((value, key)=>{
      helper[key] = value
    })
    setData1(helper)
    console.log(data1)
  }


  return (
    <div className='h-screen  bg-slate-900 text-white'>
      <input type="range" className=' h-1 mb-6 bg-gray-200 cursor-pointer  dark:bg-gray-700' />
    </div>
  )
}

export default App
