import React, { useState, useContext, useReducer } from 'react';
import TodoContext from '../context/todoContext';

export default function TodoInput() {
  //create empty state to store the input
  const [input, setInput] = useState("")
  const [cleared, setCleared] = useState(false)
  //context values
  const { todoList, addTodo, editing, clearTodoList  } = useContext(TodoContext);

  //dispatch ADD_TODO action type through context, then clear the input
  const onSubmit = (event) => {
    event.preventDefault();
      addTodo(input)
      setInput('');
      // flag used for disabling/enabling the clearTodoList button
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
        <button type="submit" onClick={onSubmit} disabled={input.length ? false : true} > Save </button>
        <button className="clear"  onClick={() => {clearTodoList(); setCleared(true)}} disabled={input.length || cleared ? true : false} > Clear Todo List </button>
      </form>
    </>
  );
};
