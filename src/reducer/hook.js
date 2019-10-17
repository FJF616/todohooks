import React, { useState, useContext } from 'react';
import TodoContext from '../context/todoContext';
import uuid from 'uuid';

export default function useEditTodo(index) {
  const context = useContext(TodoContext);

  const [input, setInput] = useState("")
  const [newList, setNewList] = useState([])
  const { todoList, addTodo } = context
  // const todoInputRef = useRef(null);
  const todoText = [...context.todoList[index].text]
  // const todoIndex = todoList.filter(todo => {
  //   if (todo.hasOwnProperty(input))
  //   return todo.id;
  // });
  const editText = () => {
    const editedTodoList = [...todoList];
    const todo = editedTodoList[index]
    todo.text = input;
    return editedTodoList;
  }

  const handleInput = (event) => {
    setInput([event.target.name] : event.target.value);
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
    onSubmit
  }
}
// const { handleTodoInput, todo} = useAddInput