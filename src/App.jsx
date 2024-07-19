import React, { useState } from 'react'
import Input from './component/Input'
import { useForm } from 'react-hook-form'


function App() {
  const {register, handleSubmit} = useForm()

  const submit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <button>submit</button>
      <Input label="name: " {...register("name", {
        required: true
      })}/>
      <Input label="age: "{...register("age")}/>
    </form>
  )
}

export default App
