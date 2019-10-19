import React, { useState, useContext, useReducer } from 'react';
import TodoContext from '../context/todoContext';

export default function TodoInput() {
  //create empty state to store the input
  const [input, setInput] = useState("")
  
  //context values
  const { todoList, addTodo, editing,  } = useContext(TodoContext);

  //dispatch ADD_TODO action type through context, then clear the input
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(input);
    setInput('');
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
      </form>
    </>
  );
};
