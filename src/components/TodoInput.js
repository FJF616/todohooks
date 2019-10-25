import React, { useState, useContext, useEffect } from 'react';
import { Button } from 'semantic-ui-react'
// import useEditHooks from '../components/hooks/editHook';
import TodoContext from '../context/todoContext';

export default function TodoInput({todo, todoList, countCompletedTodos}) {
  const { addTodo, clearTodoList, completeAll, clearCompleted } = useContext(TodoContext);
  const [completedTasks, setCompletedTasks] = useState(countCompletedTodos(todoList));
  const [input, setInput] = useState("")
  const [completeClear, setCompleteClear] = useState(false)
  const [completeList, setCompleteList] = useState(false)
  const [cleared, setCleared] = useState(false)
  // const [singleTaskComplete, setSingleTaskComplete] = useState(0)
  function onSubmit(event) {
    event.preventDefault();
      addTodo(input)
      setInput('');
      setCleared(false);
      setCompleteClear(false);
      setCompleteList(false);
    }
  
  function updateCompletedTasks() {
    const completedTodos = countCompletedTodos(todoList);
    setCompletedTasks(completedTodos)
  }
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
          content={!input.length ? "Enter a Todo" : "Save Todo"}
          onClick={onSubmit} 
          disabled={input.length || todoList.length === 0? false : true} 
          style={{width: '155px'}}
          
        /> 
        <Button 
          negative
          className="clear"  
          icon="refresh" 
          content="Clear Todo List"
          onClick={() => {
            clearTodoList(); setCleared(true); 
          }} 
          disabled={input.length || cleared || todoList.length === 0 ? true : false} 
        />
        <Button 
          className="complete"  
          icon="checkmark" 
          content="Complete All"
          onClick={() => {
            completeAll(todoList); setCompleteList(true); 
          }}  
         disabled={input.length  || cleared  || todoList.length === 0 || completedTasks === todoList.length ? true : false} 
         style={{width: '160px'}}
        />
        < Button
          color="instagram"
          className="complete"
          icon="exchange"
          content="Clear Completed"
          onClick={() => {
            clearCompleted(todoList); setCompleteClear(true); setCompletedTasks(0)
          }}
          disabled={input.length  || cleared || completedTasks === 0 ? true : false}
        />
        </Button.Group>
      </form>
    </>
  );
};
