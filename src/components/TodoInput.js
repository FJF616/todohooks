import React, { useState, useContext, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import TodoContext from '../context/todoContext';

export default function TodoInput({ todo, todoList, countCompletedTodos }) {
  const { 
    addTodo, 
    clearTodoList, 
    completeAll, 
    clearCompleted 
  } = useContext(TodoContext);
  
  //keeps track of completed tasks in order to disable/enable the clear completed todos button.
  const [completedTasks, setCompletedTasks] = useState(countCompletedTodos(todoList));
  
  //used to store user input as well as disables/enables save todo button.
  const [input, setInput] = useState("");

  //used as flag for disabling/enabling completeAll / clearList buttons 
  const [cleared, setCleared] = useState(false);
  
  function onSubmit(event) {
    event.preventDefault();
      addTodo(input);
      setInput('');
      setCleared(false);
    }
  
  function updateCompletedTasks() {
    const completedTodos = countCompletedTodos(todoList);
    return setCompletedTasks(completedTodos);
  }
  //update whenever number of completed todos changes, so clearCompleted
  //button will enable/disable at appropriate time.
  useEffect(() => {
    updateCompletedTasks();
  }, [countCompletedTodos])
  
  return (
    <>
      <form onSubmit={onSubmit} >
        <input 
          className="todo-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          name="text"
          placeholder="Enter a todo"        
        />
        <Button.Group style={{minWidth: '150px', margin: '2px'}} >
          <Button 
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
        <Button 
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
        <Button
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
         <Button
            color="google plus"
            className="clear"
            icon="refresh"
            content="Clear Todo List"
            onClick={() => { clearTodoList(); setCleared(true) }}
            disabled={input.length || cleared || todoList.length === 0 
                  ? true 
                  : false
                }
            />
        </Button.Group>
      </form>
    </>
  );
};
