import React, { useContext, useState }from 'react';
import TodoContext from './context/todoContext'
import TodoInput from './TodoInput';


//Returns each todo with control buttons
export default function Todo({ todo, index, key }) {
  const { addTodo, todoList, editTodo, removeTodo, toggleComplete } = useContext(TodoContext); 
  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  
  //edits todo text in place 
  function saveContext(data, id, index) {
    const editTodoText = todoList.filter(newTodo => newTodo.id === id)
        .map(property => { 
           property.text = data;
           return { 
             property
           };
       });    
        todoList.splice(index, 1, editTodoText)
        setEditing(false)
        return {
          todoList
        };
    };

  return (
    <div style={{display: "flex"}}>
    {editing === false
      ? <>
          {/* <div className="todo" > */}                
                  <span className="todo" style={{ textDecoration: todo.completed ? "line-through" : ""}}>{todo.text}</span>
                  <button onClick={() => toggleComplete(todo.id, index)}>{todo.completed ? 'Mark as Incomplete':'Todo Completed'}</button>
                  <button className="edit-todo" onClick={() => setEditing(true)}>Edit Todo</button>
                  <button onClick={() => removeTodo(todo.id, index)}>Delete Todo</button> 
          {/* </div> */}
        </>
      : <>
          <input value={editText} onChange={(e) => setEditText(e.target.value)} className="edit-input" />
          <button className="edit-save" onClick={() => { saveContext(editText, todo.id, index); setEditing(false)}}>Save</button>
          <button className="edit-cancel" onClick={() => setEditing(false)}>Cancel</button>
        </>
    }
      </div>
    )
};
