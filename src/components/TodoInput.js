import React, { useState, useContext } from 'react';
import { Button } from 'semantic-ui-react'
import TodoContext from '../context/todoContext';

export default function TodoInput({todo}) {
  const [input, setInput] = useState("")
  const [allClear, setAllClear] = useState(true)
  const [completeList, setCompleteList] = useState(false)
  const [cleared, setCleared] = useState(false)
  const { addTodo, clearTodoList, todoList, completeAll, clearCompleted} = useContext(TodoContext);
  function onSubmit(event) {
    event.preventDefault();
      addTodo(input)
      setInput('');
      setCleared(false);
    }
  // function clearOrComplete () {
  //   if (!completeList) {
  //     clearCompleted(todoList);
  //     setCleared(true) 
  //   } else {
  //     completeAll(todoList);
  //     setCompleteList(true)
  //   }
  // }
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
        <Button.Group style={{width: '170px', margin: '2px'}} >

        <Button 
          positive
          type="submit" 
          icon={!input.length ? "reply" : "save"} 
          content={!input.length ? "Enter a Todo" : "Save Todo"}
          onClick={onSubmit} 
          disabled={input.length ? false : true} 
          
        /> 
        <Button 
          negative
          className="clear"  
          icon="refresh" 
          content="Clear Todo List"
          onClick={() => {
            clearTodoList(); setCleared(true)
          }} 
          disabled={input.length || cleared ? true : false} 
        />
        <Button 
          className="complete"  
          icon="checkmark" 
          content="Complete All"
          onClick={() => {
            completeAll(todoList); setCompleteList(true)
          }}  
         disabled={input.length ? true : false} 
        />
        < Button
          color="instagram"
          className="complete"
          icon="exchange"
          content="Clear Completed"
          onClick={() => {
            clearCompleted(todoList);
          }}
          // disabled={completeList ? false: true}
          disabled={input.length ? true : false}
        />
        </Button.Group>
      </form>
    </>
  );
};