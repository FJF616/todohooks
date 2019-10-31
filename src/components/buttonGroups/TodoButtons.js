import React from 'react';
import { Button, Responsive } from 'semantic-ui-react';

const TodoButtons = ({ displayDate, onSetEdit, removeTodo, todo, toggleComplete, index }) => { 
      
    return (  
      
        <Responsive as={Button.Group} style={{ minWidth: '155px', maxWidth: '320px'}}>
               
                { todo.completed 
                  ? <>
                  <Responsive as={Button}
                    icon='undo' 
                    className="toggle"
                    onClick={() => toggleComplete(todo.id, index)} 
                    basic color='green'
                    maxWidth={768}
                  style={{marginLeft: '5px', minWidth: '35px', maxWidth: '85px'}}
                  />
                  <Responsive as={Button}
                    icon='undo' 
                    className="toggle"
                    content="Mark Incomplete"
                    onClick={() => toggleComplete(todo.id, index)} 
                    basic color='green'
                    minWidth={1024}
                    // maxWidth={1155}
                  style={{marginLeft: '10px', width: '175px'}}
                  
                  />
                    <Responsive as={Button}
                      basic color='blue'
                      className="edit-todo"
                      content={displayDate()}
                      icon='tasks'
                      style={{minWidth: '65px', width: '215px'}}
                      minWidth={1024}
                      // disabled={true}
                    />
                      <Responsive as={Button}
                          basic color='red'
                          icon='trash alternate' 
                          className="remove-todo" 
                          content="Remove Todo" 
                          onClick={() => removeTodo(todo.id, index)} 
                          style={{width: '150px'}}
                          minWidth={1024}
                        />
                         <Responsive as={Button}
                            basic color="red"                
                            icon='trash alternate' 
                            className="remove-todo" 
                            // content="Remove Todo" 
                            onClick={() => removeTodo(todo.id, index)} 
                            style={{minWidth: '35px', maxWidth: '165px'}}
                            maxWidth={768}
                            // {...Responsive.onlyMobile}
                          />                 
                      </>
                  : <>
                  <Responsive as={Button} 
                    icon='check' 
                    className="toggle" 
                    content="Complete"
                    onClick={() => toggleComplete(todo.id, index)} 
                    color="green"
                    style={{marginLeft: '10px', width: '175px'}}
                    minWidth={1024}
                  />
                  <Responsive as={Button} 
                    icon='check' 
                    className="toggle" 
                    // content="Mark as Complete"
                    onClick={() => toggleComplete(todo.id, index)} 
                    color="green"
                    style={{marginLeft: '10px', minWidth: '35px', maxWidth:'270px'}}
                    maxWidth={768}
                  />
              
                    <Responsive as={Button}
                      color='blue' 
                      className="edit-todo" 
                      content="Edit Todo" 
                      icon='edit'
                      onClick={() => onSetEdit()}
                      style={{width: '215px'}}
                      minWidth={1024}
                    />
                    <Responsive as={Button}
                      color='blue' 
                      className="edit-todo" 
                      // content="Edit Todo" 
                      icon='edit'
                      onClick={() => onSetEdit()}
                      style={{minWidth: '35px', maxWidth: '270px'}}
                      maxWidth={768}
                    />
                    </>
                }
              <>
              {!todo.completed &&
              <>
              <Responsive as={Button}
                negative 
                icon='trash alternate' 
                className="remove-todo" 
                content="Remove Todo" 
                onClick={() => removeTodo(todo.id, index)} 
                style={{width: '150px'}}
                minWidth={1024}
              /> 
              <Responsive as={Button}
                negative 
                icon='trash alternate' 
                className="remove-todo" 
                // content="Remove Todo" 
                onClick={() => removeTodo(todo.id, index)} 
                style={{minWidth: '35px', maxWidth: '185px'}}
                maxWidth={768}
                // {...Responsive.onlyMobile}
              />     
              </>
              }            
              </>
            />
           </Responsive>
        )
      }
      export default TodoButtons;