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
      <h2>this is form tutorial</h2>
      <form className='grid gap-2 text-green-500' onSubmit={submit}>
        <div>Name:<input className=''  type="text" name='myname:' /></div>
        <div>Role:<input type="text" name='myRoll:'/></div>
        <div>date<input type="date" name='mydate:' /></div>
        <div>talk about your self <br /><textarea name="mytext:" cols="20" rows="10" id=""></textarea></div>
        <button type='sumbit'>submit</button>
      </form>
    </div>
  )
}

export default App
