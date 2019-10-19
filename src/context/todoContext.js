import { createContext } from 'react';
import uuid from 'uuid';

const TodoContext = createContext({
  todoList: [
      {
        id: "",
        text: "",
        completed: false,
        editing: false,
        // editText:""
      }  
    ]
});

export default TodoContext;
