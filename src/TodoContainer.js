import React, { createContext, useEffect, useState, useReducer, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAuth0 } from '@auth0/auth0-react';
import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE, CLEAR_TODO_LIST,  COMPLETE_ALL, CLEAR_COMPLETED, LOAD_SAVED_TODOLIST  } from './reducer/actionTypes';
import todoReducer from './reducer/todoReducer';
import Todo from './components/Todo';
import TodoInput from './components/TodoInput';
import TodoContext from './context/todoContext';
import TodoCounter from './components/TodoCounter';
// import useSaveMetadata from './components/hooks/useSaveMetadata';
import useSaveTodoList from './components/hooks/useSaveTodoList';
import MetadataContext from './context/metadataContext';
import useEffectOnce from './components/hooks/useEffectOnce';
export const TodosDispatch = createContext(null)
export default function TodoContainer() {
  //set initial state to context state
  const { user, isAuthenticated } = useAuth0();
  const metadataKey = "https://everybodyleave.com/claims/user_metadata"
  const [userTodoList, setUserTodoList] = useState(user[metadataKey].todoList)
  // const { userMetadata }   = useContext(MetadataContext);
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todoList } = state;
  const { saveUserTodoList } = useSaveTodoList(todoList);
  
  const loadSavedTodoList = (savedList) => {
    dispatch({
      type: LOAD_SAVED_TODOLIST,
      payload: savedList
    });
  };
  
  const handleSaveList = async () => {
    await saveUserTodoList();
  }
//   const checkUser = async() => {
//   let savedTodoList;
//   const metadataKey = "https://everybodyleave.com/claims/user_metadata";
//   const isSaved = await user[metadataKey].isSaved
//   if (isAuthenticated && isSaved) {
//     savedTodoList = await user[metadataKey].todoList;
//     // savedTodoList = JSON.parse(localStorage.getItem("todoList"));
//     dispatch({ type: 'LOAD_SAVED_TODOLIST', payload: savedTodoList })
//   }
// }
  useEffectOnce(() => {
  let savedTodoList;
  const metadataKey = "https://everybodyleave.com/claims/user_metadata";
  const isSaved = user[metadataKey].isSaved
  const checkLocalStorage = JSON.parse(localStorage.getItem("todoList"));
  console.log("useEffect: ", isSaved)
  if (isAuthenticated && isSaved) {
    console.log("Loaded from user metadata")
    savedTodoList =   user[metadataKey].todoList ;
    setUserTodoList({ todoList: savedTodoList})
    dispatch({ type: 'LOAD_SAVED_TODOLIST', payload: savedTodoList })
    } else {
      if (Array.isArray(checkLocalStorage)) {
        console.log("Loaded from localStorage")
        dispatch({ type: "LOAD_SAVED_TODOLIST", payload: checkLocalStorage });
      }
    }
  })

    return (
      <TodosDispatch.Provider value={dispatch}>
        <TodoContext.Provider
          value={
            state
            // loadSavedTodoList,
            // userMetadata,
          }
        >
          <div className="App">
            <div className="todo-counter">
              {state.todoList.length ? (
                <>
                  <TodoCounter />
                </>
              ) : (
                <p> There Are Currently No Todos To Do </p>
              )}
            </div>
            <div style={{ paddingBottom: "40px" }}>
              <TodoInput />
            </div>
            <div className="list">
              {state.todoList.map((todo, index) => (
                <Todo key={todo.id} index={index} todo={todo} />
              ))}
            </div>
            <button onClick={() => handleSaveList()}> save todos </button>
            {/* <button onClick={() => ()}> save todos </button> */}
          </div>
        </TodoContext.Provider>
      </TodosDispatch.Provider>
    );
}

