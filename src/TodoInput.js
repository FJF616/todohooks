import React, { useState, useContext, useReducer, useRef} from 'react';
import { ADD_TODO, HANDLE_INPUT } from './reducer/actionTypes';
import todoReducer from './reducer/todoReducer';
import TodoContext from './context/todoContext';
import useAddInput from './reducer/hook';

function TodoInput() {
  const initialState = {}
  const [input, setInput] = useState("")
  const context = useContext(TodoContext);
  const { todoList, addTodo } = context
  // const inputRef = useRef();
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // const onSubmit = (e)  => {
  //   e.preventDefault();
  //   dispatch({
  //     type: HANDLE_INPUT,
      // payload: inputRef.current.value
    // })
    // inputRef.current.value = '';
  // }
  //arrow function binds to component
  // const handleInput = (todo, addTodo) => {
  //   event.preventDefault();
    // if(input.length) {
    //   addTodo(input);
    //   setInput("");
    // } else {
    //   return
    // };
  // };
  
  const onSubmit = (event) => {
    
    event.preventDefault()
    addTodo(input)
    setInput('')
  }
  
  return (
    <>
      <form onSubmit={onSubmit} >
        <input 
          // type="text" 
          className="todo-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          // onChange={}
          type="text"
          name="text"
          placeHolder="Enter a todo"
          // value={input.text}
          // ref={inputRef}
        
          />
      </form>
    </>
  )
}
export default TodoInput;