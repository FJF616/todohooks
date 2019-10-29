import React from 'react';
import { Button, Responsive } from 'semantic-ui-react';
import ConfirmRemove from './ConfirmRemove';


const InputGroup = ({input, onSubmit, completeAll, todoList, cleared, completedTasks, clearCompleted, clearTodoList, setCleared, setCompletedTasks }) => (
  <Responsive as={Button.Group} size='small' style={{minWidth: '225px', margin: '2px'}} >
          <Responsive 
            as={Button} 
            minWidth={1155}
            // size='big'
            positive
            type="submit" 
            icon={!input.length ? "reply" : "save"} 
            style={{width: '155px'}}
            content={!input.length ? "Enter a Todo" : "Save Todo"}
            onClick={onSubmit} 
            disabled={input.length || todoList.length === 0
                ? false 
                : true
              } 
          /> 
        <Responsive 
          as={Button} 
          // size='big'
          minWidth={1155}
          className="complete"  
          icon="checkmark" 
          style={{width: '160px'}}
          color="instagram"
          content="Complete All"
          onClick={() => { completeAll(todoList) }}  
          disabled={
           input.length || cleared  || todoList.length === 0 
            || completedTasks === todoList.length 
              ? true 
              : false
          } 
        />
        <Responsive
          as={Button}
          
          minWidth={1155}
          color="linkedin"
          className="complete"
          icon="exchange"
          content="Clear Completed"
          onClick={() => { clearCompleted(todoList); setCompletedTasks(0) }}
          disabled={ input.length  || cleared || completedTasks === 0 
                ? true 
                : false
              } 
          />
         {/* <Responsive
            as={Button}
            minWidth={1155}
            color="google plus"
            className="clear"
            icon="refresh"
            content="Clear Todo List"
            onClick={() => { clearTodoList(); setCleared(true) }}
            disabled={input.length || cleared || todoList.length === 0 
                  ? true 
                  : false
                }
            /> */}
            <Responsive 
            as={Button} 
            maxWidth={1154}
            positive
            type="submit" 
            icon={!input.length ? "reply" : "save"} 
            style={{width: '40px'}}
            // content={!input.length ? "Enter a Todo" : "Save Todo"}
            onClick={onSubmit} 
            disabled={input.length || todoList.length === 0
                ? false 
                : true
              } 
          /> 
        <Responsive 
          as={Button} 
          maxWidth={1154}
          className="complete"  
          icon="checkmark" 
          style={{ width: '40px'}}
          color="instagram"
          // content="Complete All"
          onClick={() => { completeAll(todoList) }}  
          disabled={
           input.length || cleared  || todoList.length === 0 
            || completedTasks === todoList.length 
              ? true 
              : false
          } 
        />
        <Responsive
          as={Button}
          maxWidth={1154}
          color="linkedin"
          className="complete"
          icon="exchange"
          style={{width: '40px'}}

          // content="Clear Completed"
          onClick={() => { clearCompleted(todoList); setCompletedTasks(0) }}
          disabled={ input.length  || cleared || completedTasks === 0 
                ? true 
                : false
              } 
          />
         {/* <Responsive
            as={Button}
            maxWidth={1154}
            color="google plus"
            style={{width: '40px'}}
            className="clear"
            icon="refresh"
            // content="Clear Todo List"
            onClick={() => { clearTodoList(); setCleared(true) }}
            disabled={input.length || cleared || todoList.length === 0 
                  ? true 
                  : false
                }
            /> */}
            <ConfirmRemove 
              clearTodoList={clearTodoList} 
              setCleared={setCleared} 
              input={input} 
              cleared={cleared} 
              todoList={todoList} 
            />
        </Responsive>
)
export default InputGroup;