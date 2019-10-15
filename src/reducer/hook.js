import React, { useState, useContext } from 'react';
import TodoContext from '../context/todoContext';
import uuid from 'uuid';

export default function useAddInput(initialState=[{}]) {
  const [input, setInput] = useState(initialState);
  const [newList, setNewList] = useState([])
  const context = useContext(TodoContext);
  const { todoList, addTodo } = context
  // const todoInputRef = useRef(null);
  
  const handleInput = (event) => {
    setInput({...input,  [event.target.name] : event.target.value,  id: uuid.v4(), text: input, completed: false });
  }
 const onSubmit = (event) => {

   event.preventDefault();
   if (input.text.length === 0) {
    setInput(initialState)
   } else {
     return
     
   };

 }
  return {
    handleInput,
    input,
    onSubmit
  }
}
// const { handleTodoInput, todo} = useAddInput