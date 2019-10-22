import React, { useState, useContext } from 'react';
import { Button } from 'semantic-ui-react'
import TodoContext from '../context/todoContext';

export default function TodoInput() {
  const [input, setInput] = useState("")
  const [cleared, setCleared] = useState(false)
  const { addTodo, clearTodoList  } = useContext(TodoContext);

  function onSubmit(event) {
    event.preventDefault();
      addTodo(input)
      setInput('');
      setCleared(false);
    }

  return (
    <>
      <form onSubmit={onSubmit} >
        <input 
          className="todo-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          name="text"
          placeHolder="Enter a todo"        
        />
        <Button 
          type="submit" 
          icon="save" 
          onClick={onSubmit} 
          disabled={input.length ? false : true} 
        /> 
        <Button 
          className="clear"  
          icon="refresh" 
          onClick={() => {
            clearTodoList(); setCleared(true)
          }} 
          disabled={input.length || cleared ? true : false} 
        />
      </form>
    </>
  );
};
