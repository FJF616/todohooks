import React, { useContext }from 'react';
import { Button } from 'semantic-ui-react';
import TodoContext from '../context/todoContext'
import useTodoHooks from '../reducer/hook';

//Returns each todo with control Buttons
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
                <Button className="toggle" onClick={() => toggleComplete(todo.id, index)}>{ todo.completed ? 'Mark as Incomplete':'Todo Completed' }</Button>
                < Button 
                  color = 'blue'
                  className = "edit-todo"
                  icon='edit'
                  labelPosition='left'
                  onClick = {() => onSetEdit()}
                  content='Edit Todo'
                />
              
                <Button negative className="remove-todo" onClick={() => removeTodo(todo.id, index)}>Delete Todo</Button>         
          </>
        : <>
            <input className="todo" style={{ textDecoration: todo.completed ? "line-through" : "" }} placeholder={editText} onChange={(e) => onSetEditText(e.target.value)}  />
            <Button className="toggle" disabled={true} >{ todo.completed ? 'Mark as Incomplete':'Todo Completed' }</Button>
            < Button.Group >
              < Button 
                  positive 
                  onClick = {() => {saveContext(editText, todo.id, index);onSetEdit()}} 
                > 
                  Save 
              </Button>  
              <Button.Or / >
              <Button 
                  negative 
                  onClick = {() => onSetEdit()}
                > 
                  Cancel 
              </Button>  
            </Button.Group>
            {/* <Button className="edit-save" onClick={() => { saveContext(editText, todo.id, index); onSetEdit()}}>Save</Button>
            <Button className="edit-cancel" onClick={() => onSetEdit()}>Cancel</Button> */}
          </>
        }
      </div>
    );
  };
