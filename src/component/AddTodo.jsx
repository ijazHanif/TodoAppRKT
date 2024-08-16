import React, { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const HandleSubmission = (e)=>{
   e.preventDefault()
   dispatch(addTodo(input))
   setInput('')
  }
  return (
    <form onSubmit={HandleSubmission} className='space-x-3 mt-10 flex justify-center' >
      <input 
      type="text" 
      className='bg-gray-800 text-white rounded px-2 py-1 border border-gray-700
       focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-900
       transition-colors duration-300 ease-in-out'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder='Enter todo...'
      />
      <button type='submit' 
       className='bg-indigo-500 focus:bg-indigo-800 px-4 py-1.5 text-white rounded'>
       Add Todo</button>
    </form>
  )
}

export default AddTodo