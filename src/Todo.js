import React, { useContext, useState }from 'react';
import TodoContext from './context/todoContext'

//Returns each todo with control buttons
export default function Todo({ todo, index }) {
  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  //context global state
  //context methods will dispatch actions to the reducer.
  // const context = useContext(TodoContext)
  const { addTodo, todoList, editTodo, removeTodo, toggleComplete } = useContext(TodoContext); 
  
  return (
    <div style={{display: "flex"}}>
    {editing === false 
      ? <>
          {/* <div className="todo" > */}
            <span className="todo" style={{ textDecoration: todo.completed ? "line-through" : ""}}>{todo.text}</span>
            <button onClick={() => toggleComplete(todo.id)}>{todo.completed ? 'Mark as Incomplete':'Todo Completed'}</button>
            <button className="edit-todo" onClick={() => setEditing(true)}>Edit Todo</button>
            <button onClick={() => removeTodo(todo.id)}>Delete Todo</button>
          {/* </div> */}
        </>
      : <>
          <input value={editText} onChange={(e) => setEditText(e.target.value)} className="edit-input" />
          <button className="edit-save" onClick={() => { editTodo(todo.id, editText); setEditing(false); }}>Save</button>
          <button className="edit-cancel" onClick={() => setEditing(false)}>Cancel</button>
        </>
    }
      </div>
    )
};
