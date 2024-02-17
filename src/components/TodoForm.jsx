import React, { useState } from 'react'
import { useTodo } from '../contexts';

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const {addTodo} = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!todo) return;
    addTodo({todo, completed: false});
    setTodo("");
  }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
       <input type="text" placeholder='Write here' value={todo} onChange={(e) => setTodo(e.target.value)} />
       <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm