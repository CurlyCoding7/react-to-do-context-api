import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id ));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo));
  }


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])
  
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className='home'>
      <div className='container'>
          <h1>Task Manager</h1>
          <TodoForm/>
          {
            todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
          }
      </div>

    </div>
    </TodoProvider>
  )
}

export default App
