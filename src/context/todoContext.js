// import React, { createContext, useReducer, useContext } from 'react';
// import todoReducer from '../reducer/todoReducer';

import { createContext } from 'react';
import uuid from 'uuid';

export const TodoContext = createContext({
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
// export const initialStateValue = useContext(TodoContext);

// export const TodoContextProvider = ({dispatch, initialState, children}) => (
//     <TodoContext.Provider value={ useReducer(todoReducer, initialState)}>
//       {children}
//     </TodoContext.Provider>
//   );


