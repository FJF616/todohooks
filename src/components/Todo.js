import React, { useContext, useState }from 'react';
import TodoContext from '../context/todoContext'
import TodoInput from './TodoInput';


//Returns each todo with control buttons
export default function Todo({ todo, index }) {
  
  const { 
    addTodo, 
    todoList,  
    removeTodo, 
    toggleComplete 
    } = useContext(TodoContext); 

  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  
  //edits todo text 
  function saveContext(data, id, index) {
    const editTodoText = todoList
        .filter(newTodo => newTodo.id === id)
        .map(property => { 
           property.text = data;
           return { 
             property
           }
       });         
        setEditing(false);
        return {
          todoList
        }
    };

  return (
    <div style={{display: "flex"}}>
      {editing === false
        ? <>
            <span className="todo" style={{ textDecoration: todo.completed ? "line-through" : "" }}>{todo.text}</span>
            <button className="toggle" onClick={() => toggleComplete(todo.id, index)}>{ todo.completed ? 'Mark as Incomplete':'Todo Completed' }</button>
            <button className="edit-todo" onClick={() => setEditing(true)}>Edit Todo</button>
            <button className="remove-todo" onClick={() => removeTodo(todo.id, index)}>Delete Todo</button> 
          </>
        : <>
            <input className="todo" style={{ textDecoration: todo.completed ? "line-through" : "" }} placeholder={editText} onChange={(e) => setEditText(e.target.value)}  />
            <button className="toggle" disabled={true} >{ todo.completed ? 'Mark as Incomplete':'Todo Completed' }</button>

            <button className="edit-save" onClick={() => { saveContext(editText, todo.id, index); setEditing(false)}}>Save</button>
            <button className="edit-cancel" onClick={() => setEditing(false)}>Cancel</button>
          </>
        }
      </div>
    );
};
