import { createContext } from 'react';
import TodoReducer from '../reducer/todoReducer';
const TodoContext = createContext({
  todoList: [
      {
        id: 1,
        text: "eat",
        completed: false,
        editing: false,
      }  
    ]
});

export default TodoContext;
