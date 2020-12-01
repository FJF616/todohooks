import React from 'react';
import { Button, Popup, Responsive } from 'semantic-ui-react';
import ConfirmRemove from './ConfirmRemove';

//This component will display the button group used when adding a todo.  
const InputGroup = ({input, onSubmit, completeAll, todoList, cleared, completedTasks, clearCompleted, clearTodoList, setCleared, setCompletedTasks }) => (
      <Responsive as={Button.Group}   fluid style={{ minWidth: '150px', maxWidth: '360px', margin: '2px'}} >
        {/* this button saves each todo*/}
          <Responsive 
            as={Button} 
            //for desktop resolutions
            minWidth={1024}
            positive
            type="submit" 
            icon={!input.length ? "reply" : "save"} 
            style={{ maxWidth: '165px', minWidth: '145px' }}
            content={!input.length ? "Enter a Todo" : "Save Todo"}
            onClick={onSubmit} 
            disabled={
              input.length 
              || todoList.length === 0
                ? false 
                : true
              } 
          /> 
         <Popup content="Add a todo"
          position="bottom"
          on="hover"
          trigger={
            <Responsive 
            as={Button} 
            //for mobile device resolutions
            maxWidth={768}
            positive
            type="submit" 
            icon={!input.length ? "reply" : "save"} 
            style={{width: '50px'}}
            onClick={onSubmit} 
            disabled={
              input.length 
              || todoList.length === 0
                ? false 
                : true
              } 
            /> }
        />
        {/* this button marks every todo as complete */}
        <Responsive 
          as={Button} 
          minWidth={1024}
          className="complete"  
          icon="checkmark" 
          style={{maxWidth: '160px'}}
          color="instagram"
          content="Complete All"
          onClick={() => { completeAll(todoList) }}  
          disabled={
            input.length 
            || cleared  
            || todoList.length === 0 
            || completedTasks === todoList.length 
              ? true 
              : false
            } 
          />
          <Popup content="Complete all" 
          on='hover'

          trigger={
         <Responsive 
          as={Button} 
          maxWidth={768}
          className="complete"  
          icon="checkmark" 
          style={{ width: '55px'}}
          color="instagram"
          // content="Complete All"
          onClick={() => { completeAll(todoList) }}  
          disabled={
            input.length 
            || cleared  
            || todoList.length === 0 
            || completedTasks === todoList.length 
              ? true 
              : false
          } 
        />}

        />
        <Responsive
          as={Button}
          minWidth={1024}
          color="linkedin"
          className="complete"
          style={{width: '124px'}}
          icon="exchange"
          content="Clear Completed"
          onClick={() => { clearCompleted(todoList); setCompletedTasks(0) }}
          disabled={ 
            input.length  
            || cleared 
            || completedTasks === 0 
                ? true 
                : false
              } 
          />
          <Popup content="Clear Completed"
          trigger={
        <Responsive
          as={Button}
          maxWidth={768}
          color="linkedin"
          className="complete"
          icon="exchange"
          style={{width: '55px'}}
          onClick={() => { clearCompleted(todoList); setCompletedTasks(0) }}
          disabled={ 
            input.length  
            || cleared 
            || completedTasks === 0 
                ? true 
                : false
              } 
           />}
           />
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