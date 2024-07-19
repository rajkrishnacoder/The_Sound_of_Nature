import React, { useState } from 'react'
import Input from './component/Input'


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
    <form onSubmit={submit}>
      <Input/>
      <button type='submit'>submit</button>
      <input type="text" name='age' className='bg-slate-400'/>
    </form>
  )
}

export default App
