import React from 'react';
import { Button, Responsive } from 'semantic-ui-react';

const TodoButtons = ({ displayDate, onSetEdit, removeTodo, todo, toggleComplete, index }) => { 
      
    return (  
      
        <Responsive as={Button.Group}  style={{ minWidth: '175px', maxWidth: '370px'}}>
               
                { todo.completed 
                  ? <>
                  <Responsive as={Button}
                    icon='undo' 
                    className="toggle"
                    onClick={() => toggleComplete(todo.id, index)} 
                    basic color='green'
                    maxWidth={1150}
                  style={{marginLeft: '10px', minWidth: '35px', maxWidth: '85px'}}
                  />
                  <Responsive as={Button}
                    icon='undo' 
                    className="toggle"
                    content="Mark Incomplete"
                    onClick={() => toggleComplete(todo.id, index)} 
                    basic color='green'
                    minWidth={1155}
                    // maxWidth={1155}
                  style={{marginLeft: '10px', width: '180px'}}
                  
                  />
                    <Responsive as={Button}
                      basic color='blue'
                      className="edit-todo"
                      content={displayDate()}
                      icon='tasks'
                      style={{minWidth: '65px', width: '270px'}}
                      minWidth={1155}
                      // disabled={true}
                    />
                      <Responsive as={Button}
                          basic color='red'
                          icon='trash alternate' 
                          className="remove-todo" 
                          content="Remove Todo" 
                          onClick={() => removeTodo(todo.id, index)} 
                          style={{width: '185px'}}
                          minWidth={1155}
                        />
                         <Responsive as={Button}
                            basic color="red"                
                            icon='trash alternate' 
                            className="remove-todo" 
                            // content="Remove Todo" 
                            onClick={() => removeTodo(todo.id, index)} 
                            style={{minWidth: '35px', maxWidth: '185px'}}
                            maxWidth={1024}
                            // {...Responsive.onlyMobile}
                          />                 
                      </>
                  : <>
                  <Responsive as={Button} 
                    icon='check' 
                    className="toggle" 
                    content="Mark as Complete"
                    onClick={() => toggleComplete(todo.id, index)} 
                    color="green"
                    style={{marginLeft: '10px'}}
                    minWidth={1155}
                  />
                  <Responsive as={Button} 
                    icon='check' 
                    className="toggle" 
                    // content="Mark as Complete"
                    onClick={() => toggleComplete(todo.id, index)} 
                    color="green"
                    style={{marginLeft: '10px', minWidth: '35px', maxWidth:'270px'}}
                    maxWidth={1150}
                  />
              
                    <Responsive as={Button}
                      color='blue' 
                      className="edit-todo" 
                      content="Edit Todo" 
                      icon='edit'
                      onClick={() => onSetEdit()}
                      style={{width: '270px'}}
                      minWidth={1155}
                    />
                    <Responsive as={Button}
                      color='blue' 
                      className="edit-todo" 
                      // content="Edit Todo" 
                      icon='edit'
                      onClick={() => onSetEdit()}
                      style={{minWidth: '35px', maxWidth: '270px'}}
                      maxWidth={1150}
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
                style={{width: '185px'}}
                minWidth={1155}
              /> 
              <Responsive as={Button}
                negative 
                icon='trash alternate' 
                className="remove-todo" 
                // content="Remove Todo" 
                onClick={() => removeTodo(todo.id, index)} 
                style={{minWidth: '35px', maxWidth: '185px'}}
                maxWidth={1150}
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