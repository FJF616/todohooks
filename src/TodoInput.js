import React, { useState, useContext, useReducer } from 'react';
import todoReducer from './reducer/todoReducer';
import TodoContext from './context/todoContext';

export default function TodoInput() {
  //create empty state to store the input
  // const initialState = {}
  const [input, setInput] = useState("")
  
  //context values
  // const context = useContext(TodoContext);
  const { todoList, addTodo, editing,  } = useContext(TodoContext);

  //initial state is used locally here for storing input, the local state will
  //be passed through the dispatch method to update the todos in context global state.
  // const [state, dispatch] = useReducer(todoReducer, initialState);
 
  //dispatch ADD_TODO action type through context addTodo method, then clear the input
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
