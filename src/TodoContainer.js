import React, { createContext, useRef, useEffect, useState, useReducer, useContext } from 'react';
import todoReducer from './reducer/todoReducer';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {  Button } from 'semantic-ui-react';
import { Todo, TodoInput }  from './components';
import { TodoContext, MetadataContext } from './context';
import { useSaveTodoList, useEffectOnce } from './components/hooks';
import  ConfirmRemove from './components/buttonGroups/ConfirmRemove';
import VisibilitySwitch from './components/visibilitySwitch';
export const TodosDispatch = createContext(null);

export default function TodoContainer() {
  //set initial state to context state
  const { useAuth0, userTodoList, getUserMetadata, setHasSaved } = useContext(MetadataContext);
  const { user, isAuthenticated } = useAuth0();
  const [userList, setUserList] = useState(userTodoList)
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todoList } = state;
  const { saveUserTodoList, updateLocalStorage } = useSaveTodoList(todoList);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      inputRef.current.focus()
    }
  })
  const handleSaveList = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList))
    saveUserTodoList(todoList);
  };
  
  useEffectOnce(() => {
    const localStorageList = JSON.parse(localStorage.getItem("todoList"));
    const metadataKey = "https://everybodyleave.com/claims/user_metadata";
    
    if (user) {
      const isSaved = user[metadataKey].isSaved;

    if (isAuthenticated && isSaved) {
      const savedTodoList = user[metadataKey].todoList;
      console.log("useEffectOnce isSaved: ", isSaved);
      console.log("Loaded from user Auth0 Context");
      setUserList({ todoList: savedTodoList });
      dispatch({ type: "LOAD_SAVED_TODO_LIST", payload: savedTodoList });
    
    } else {
      if (Array.isArray(localStorageList)) {
        setUserList({ todoList: localStorageList });
        console.log("Loaded from localStorage");
        dispatch({ type: "LOAD_SAVED_TODO_LIST", payload: localStorageList });
      }
    }
  }
  });

    return (
      <TodosDispatch.Provider value={dispatch}>
        <TodoContext.Provider value={state}>
          <div className="App">
            <div className="top">
              <VisibilitySwitch/>
            </div>
            <div style={{ paddingBottom: "40px" }}>
              { isAuthenticated && <TodoInput  ref={inputRef} /> }
            </div>
            <div>
              <TransitionGroup className="todo-list">
                {state.todoList.map((todo, index) => (
                  <CSSTransition key={todo.id} timeout={500} classNames="item">
                    <Todo key={todo.id} index={index} todo={todo}  />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
            <div className="bottom">
              <Button
                disabled={
                  isAuthenticated
                    ? false
                    : isAuthenticated && todoList.length
                    ? false
                    : true
                }
                onClick={() => { handleSaveList(); setHasSaved(true)} }
              >
                SAVE TODOS
              </Button>
              {/* <ConfirmRemove/> */}
            </div>
          </div>
        </TodoContext.Provider>
      </TodosDispatch.Provider>
    );
}

