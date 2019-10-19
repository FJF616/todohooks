import { createContext } from 'react';
import uuid from 'uuid';

const TodoContext = createContext({
  todoList: [
      {
        id: uuid.v4(),
        text: "example todo",
        completed: false,
        editing: false,
        // editText:""
      }  
    ]
});

export default TodoContext;
