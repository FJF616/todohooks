import React, { useContext }from 'react';
import TodoContext from './context/todoContext'

//Returns each todo with control buttons
function Todo({ todo, index }) {
  const context = useContext(TodoContext)
  const { todoList, removeTodo, toggleComplete } = context; 

  return (

    <div style={{display: "flex"}}>
       <>
      <div className="todo" style={{ textDecoration: todo.completed ? "line-through" : ""}}>
          {todo.text}
          <button onClick={() => toggleComplete(index)}>{todo.completed ? 'Mark as Incomplete':'Todo Completed'}</button>
        </div>
          <button onClick={() => removeTodo(index)}>Delete Todo</button>
        </>
      
        
      
      </div>
    )
};
export default Todo;