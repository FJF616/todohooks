import React, { useState, useContext, useEffect } from 'react';
import InputGroup from '../components/buttonGroups/InputGroup'
import { useAuth0 } from '@auth0/auth0-react';
import useEditHooks from '../components/hooks/editHook';
import { TodosDispatch } from '../TodoContainer';
import TodoContext from "../context/todoContext";

export default function TodoInput({ sendUserMetadata }) {
  const { isAuthenticated } = useAuth0();
  const { countCompletedTodos } = useEditHooks();
  const state = useContext(TodoContext);
  const { todoList } = state;
  const dispatch = useContext(TodosDispatch);
 
  //keeps track of completed tasks in order to disable/enable the clear completed todos button.
  const [completedTasks, setCompletedTasks] = useState(countCompletedTodos(todoList));
  
  //used to store user input as well as disables/enables save todo button.
  const [input, setInput] = useState("");

  //used as flag for disabling/enabling completeAll / clearList buttons 
  const [cleared, setCleared] = useState(false);
  
  function onSubmit(event) {
    event.preventDefault();
      dispatch({ type: 'ADD_TODO', payload: input })
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
      <form onSubmit={onSubmit}>
        <input 
          className="todo-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          name="text"
          disabled={isAuthenticated ? false : true}
          placeholder={isAuthenticated ? "Enter a todo" : "Please Login"}        
        />
        <InputGroup 
          input={input} 
          onSubmit={onSubmit}
          cleared={cleared}
          completedTasks={completedTasks}
          setCleared={setCleared}
          setCompletedTasks={setCompletedTasks} 
        /> 
      </form>
    </>
  );
};
