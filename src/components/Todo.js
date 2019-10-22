import React, { useContext }from 'react';
import { Button } from 'semantic-ui-react';
import TodoContext from '../context/todoContext'
import useTodoHooks from '../reducer/hook';
import SaveOrCancel from '../components/buttonGroups/SaveOrCancel';

//Returns each todo with control Buttons
export default function Todo({ todo, index }) {
  
  const { 
    removeTodo, 
    toggleComplete,
    } = useContext(TodoContext); 

  const {  
    editing, 
    editText, 
    onSetEdit, 
    onSetEditText, 
    saveContext,
    } = useTodoHooks(todo);
    
  return (
    <>
    <div className="buttons" style={{display: "flex", paddingBottom: '5px', paddingLeft: '5px'}}>
      {editing === false
        ? <>
            <div className='input'> 
              <span className="todo" style={{  textDecoration: todo.completed ? "line-through" : ""  }}>{todo.text}</span>
             </div>
              <Button icon={todo.completed ? 'undo' : 'check'} className="toggle" style={{marginLeft: '5px'}} onClick={() => toggleComplete(todo.id, index)} />
              <Button color = 'blue' className = "edit-todo" icon='edit' onClick = {() => onSetEdit()}/>
              <Button negative icon='trash alternate' className="remove-todo" onClick={() => removeTodo(todo.id, index)} />         
           </>
        : <>
            <div className='input'  > 
            <input className="todo" style={{ textDecoration: todo.completed ? "line-through" : "" }} placeholder={editText} onChange={(e) => onSetEditText(e.target.value)}  />
            </div>
            <Button className="toggle" disabled={true} style={{marginLeft: '5px'}} content='Editing Todo' />
            <SaveOrCancel id={todo.id} saveContext={saveContext} onSetEdit={onSetEdit} index={index} editText={editText}/>
          </>
        }
      </div>
      </>
    );
  };
