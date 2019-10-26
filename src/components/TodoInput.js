import React, { useState, useContext, useEffect } from 'react';
import TodoContext from '../context/todoContext';
import InputGroup from '../components/buttonGroups/InputGroup'
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
        <InputGroup 
          input={input} 
          onSubmit={onSubmit}
          completeAll={completeAll}
          todoList={todoList}
          cleared={cleared}
          completedTasks={completedTasks}
          clearCompleted={clearCompleted}
          clearTodoList={clearTodoList}
          setCleared={setCleared}
          setCompletedTasks={setCompletedTasks} 
        /> 
      </form>
    </>
  );
};
