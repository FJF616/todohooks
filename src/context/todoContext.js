import { createContext, useState, useReducer } from 'react';
// const [input, setInput] = useState("")
// const setInputState = (data) => {
//   const newState = setInput(data)
//   return newState
// }
const TodoContext = createContext({
  todoList: [
      {
        id: 1,
        text: "eat",
        completed: false
      }  
    ]
  // setInputState: (input) => {}
});


export default TodoContext;
