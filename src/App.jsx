import React from 'react'
import AddTodo from './component/AddTodo'
import Todo from './component/Todo'

export const App = () => {
  return (
    <div className='bg-gray-300 h-screen text-center text-xl py-10 font-semibold'>
      Todo App width Redux toolkit
       <AddTodo/>
       <Todo/>
    </div>
  )
}
