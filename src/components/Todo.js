import React, { useContext }from 'react';
import TodoContext from '../context/todoContext'
import useTodoHooks from '../reducer/hook';

//Returns each todo with control buttons
export default function Todo({ todo, index }) {
  
  const { 
    removeTodo, 
    toggleComplete 
    } = useContext(TodoContext); 
  const {  
    editing, 
    editText, 
    onSetEdit, 
    onSetEditText, 
    saveContext 
    } = useTodoHooks(todo);
    
  return (
    <div className="buttons" style={{display: "flex" }}>
      {editing === false
        ? <>
            <span className="todo" style={{ textDecoration: todo.completed ? "line-through" : ""  }}>{todo.text}</span>
               
                <button className="toggle" onClick={() => toggleComplete(todo.id, index)}>{ todo.completed ? 'Mark as Incomplete':'Todo Completed' }</button>
                <button className="edit-todo" onClick={() => onSetEdit()}>Edit Todo</button>
                <button className="remove-todo" onClick={() => removeTodo(todo.id, index)}>Delete Todo</button> 
              
          </>
        : <>
            <input className="todo" style={{ textDecoration: todo.completed ? "line-through" : "" }} placeholder={editText} onChange={(e) => onSetEditText(e.target.value)}  />
            <button className="toggle" disabled={true} >{ todo.completed ? 'Mark as Incomplete':'Todo Completed' }</button>
            <button className="edit-save" onClick={() => { saveContext(editText, todo.id, index); onSetEdit()}}>Save</button>
            <button className="edit-cancel" onClick={() => onSetEdit()}>Cancel</button>
          </>
        }
      </div>
    );
};
