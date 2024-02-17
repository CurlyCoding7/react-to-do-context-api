import React, { useState } from 'react'
import { useTodo } from '../contexts'

const TodoItem = ({todo}) => {
  const {updateTodo, deleteTodo, toggleComplete} = useTodo();  
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id,{...todo, todo: todoMsg});
    setIsEditable(false);
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  }

  const handleEditSave = () => {
    if(todo.completed) return;

    if(isEditable){
        editTodo();
    }
    else{
        setIsEditable(prev => !prev);
    }
  }

  return (
    <div className="todo-item" style={isEditable?{backgroundColor: 'skyblue'}: undefined}>
        <input id="check-input" type="checkbox" onChange={toggleCompleted} checked={todo.completed} />
        <input id='text-input' type="text" value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} readOnly={!isEditable} 
        className={todo.completed ? "completed" : ""}  style={isEditable?{backgroundColor: 'skyblue'}: undefined} />
        <button onClick={handleEditSave} id='update-button' disabled={todo.completed}>{isEditable ? "Save" : "Edit"}</button>
        <button onClick={() => deleteTodo(todo.id)} id='delete-button'>X</button>
    </div>
  )
}

export default TodoItem