import React, { useContext }from 'react';
import { Button } from 'semantic-ui-react';
import TodoContext from '../context/todoContext'
import useEditHooks from '../components/hooks/editHook';
import SaveOrCancel from '../components/buttonGroups/SaveOrCancel';
import EditRemove from './buttonGroups/EditRemove';
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
  //displays current date yyyy/dd/mm
  function displayDate() {
    const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    return utc;
  }  

  return (
    <>
    <div className="buttons" style={{ display: "flex", paddingBottom: '10px', paddingLeft: '5px' }}>
      { editing === false
        ? <>
            <div className='input'> 
              <span className="todo" style={{ textDecoration: todo.completed ? "line-through" : "", marginRight: '5px' }}>{todo.text}</span>
             </div>
             { todo.completed
                ? <Button 
                    icon='undo' 
                    className="toggle" 
                    content="Mark as Incomplete" 
                    onClick={() => toggleComplete(todo.id, index)} 
                    basic color='green'
                  style={{marginLeft: '10px'}}
                  />
                : <Button 
                    icon='check' 
                    className="toggle" 
                    content="Mark as Complete"
                    onClick={() => toggleComplete(todo.id, index)} 
                    color="green"
                    style={{marginLeft: '10px'}}
                  />
                }
                <EditRemove 
                  displayDate={displayDate}
                  onSetEdit={onSetEdit}
                  removeTodo={removeTodo}
                  todo={todo}
                  index={index}
                />
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
                basic color="black"
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
