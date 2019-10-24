import React, { useContext }from 'react';
import { Button } from 'semantic-ui-react';
import TodoContext from '../context/todoContext'
import useEditHooks from '../components/hooks/editHook';
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
    saveEditText,
    } = useEditHooks(todo);
    
  return (
    <>
    <div className="buttons" style={{display: "flex", paddingBottom: '10px', paddingLeft: '5px'}}>
      {editing === false
        ? <>
            <div className='input'> 
              <span className="todo" style={{  textDecoration: todo.completed ? "line-through" : "", marginRight: '5px'  }}>{todo.text}</span>
             </div>
              <Button 
                icon={todo.completed ? 'undo' : 'check'} 
                className="toggle" 
                content={todo.completed ? "Mark as Incomplete" : "Mark as Complete"} 
                onClick={() => toggleComplete(todo.id, index)} 
                style={{marginLeft: '10px'}}
              />
              <Button.Group >
              <Button 
                color='blue' 
                className="edit-todo" 
                content="Edit Todo" 
                icon='edit' 
                onClick={() => onSetEdit()}
                style={{width: '185px'}}
              />
              <Button 
                negative 
                icon='trash alternate' 
                className="remove-todo" 
                content="Remove Todo" 
                onClick={() => removeTodo(todo.id, index)} 
                style={{width: '185px'}}
              />         
            </Button.Group>
           </>
        : <>
            <div className='input'> 
              <input 
                className="todo" 
                style={{ textDecoration: todo.completed ? "line-through" : "" }} 
                placeholder="Click Here to Edit" 
                onChange={(e) => onSetEditText(e.target.value)}  
              />
            </div>
              <Button 
                className="toggle" 
                disabled={true} 
                content='Editing Todo...'
                style={{marginLeft: '10px'}}
              />
            <SaveOrCancel 
              id={todo.id} 
              saveContext={saveEditText} 
              onSetEdit={onSetEdit} 
              index={index} 
              editText={editText}
            />
          </>
        }
      </div>
      </>
    );
  };
