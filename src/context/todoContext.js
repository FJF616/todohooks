import { createContext } from 'react';
import TodoReducer from '../reducer/todoReducer';
import uuid from 'uuid';
const TodoContext = createContext({
  todoList: [
      {
        id: uuid.v4(),
        text: "eat",
        completed: false,
        editing: false,
        editText:""
      }  
    ]
});

export default TodoContext;
