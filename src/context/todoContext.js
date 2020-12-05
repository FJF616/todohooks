// import React, { createContext, useReducer, useContext } from 'react';
// import todoReducer from '../reducer/todoReducer';

import {  createContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import uuid from 'uuid';

//check for any saved todos and load them, if not just load the example todo
const savedTodos = JSON.parse(localStorage.getItem("todoList"))
export const TodoContext = createContext({
    todoList:  !Array.isArray(savedTodos)  ?  [
      {
        id: uuid.v4(),
        text: "example todo",
        completed: false,
        editing: false,
        // editText:""
      }  
    ]
    :
    savedTodos
});
export default TodoContext;
// export const initialStateValue = useContext(TodoContext);

// export const TodoContextProvider = ({dispatch, initialState, children}) => (
//     <TodoContext.Provider value={ useReducer(todoReducer, initialStateValue)}>
//       {children}
//     </TodoContext.Provider>
//   );


