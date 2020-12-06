import React, { createContext, useState, useReducer, useContext } from 'react';
import todoReducer from './reducer/todoReducer';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {  Button } from 'semantic-ui-react';
import { ProgressBar, Todo, TodoCounter, TodoInput }  from './components';
import { TodoContext, MetadataContext } from './context';
// import useSaveMetadata from './components/hooks/useSaveMetadata';
import { useSaveTodoList, useEffectOnce } from './components/hooks';

export const TodosDispatch = createContext(null);

export default function TodoContainer() {
  //set initial state to context state
  const { useAuth0 } = useContext(MetadataContext);
  const { user, isAuthenticated } = useAuth0();
  const [userTodoList, setUserTodoList] = useState("")
  // const { userMetadata }   = useContext(MetadataContext);
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todoList } = state;
  const { saveUserTodoList } = useSaveTodoList(todoList);
  
  const handleSaveList = async () => {
    await saveUserTodoList();
  };

  useEffectOnce(() => {
    const localStorageList = JSON.parse(localStorage.getItem("todoList"));
    const metadataKey = "https://everybodyleave.com/claims/user_metadata";
    if (user) {
      const isSaved = user[metadataKey].isSaved;

    if (isAuthenticated && isSaved) {
      const savedTodoList = user[metadataKey].todoList;
      console.log("useEffectOnce isSaved: ", isSaved);
      console.log("Loaded from user metadata");
      setUserTodoList({ todoList: savedTodoList });
      dispatch({ type: "LOAD_SAVED_TODOLIST", payload: savedTodoList });
    
    } else {
      if (Array.isArray(localStorageList)) {
        setUserTodoList({ todoList: localStorageList });
        console.log("Loaded from localStorage");
        dispatch({ type: "LOAD_SAVED_TODOLIST", payload: localStorageList });
      }
    }
  }
  });

    return (
      <TodosDispatch.Provider value={dispatch}>
        <TodoContext.Provider value={state}>
          <div className="App">
            <div className="top">
              <div className="progressbar">
                <ProgressBar />
              </div>
              <div className="todo-counter">
                <TodoCounter />
              </div>
            </div>
            <div style={{ paddingBottom: "40px" }}>
              <TodoInput />
            </div>
            <div>
              <TransitionGroup className="todo-list">
                {state.todoList.map((todo, index) => (
                  <CSSTransition key={todo.id} timeout={500} classNames="item">
                    <Todo key={todo.id} index={index} todo={todo} />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
            <div className="bottom">
              <Button
                disabled={
                  isAuthenticated
                    ? false
                    : isAuthenticated && state.todoList.length
                    ? false
                    : true
                }
                onClick={() => handleSaveList()}
              >
                SAVE TODOS
              </Button>
            </div>
          </div>
        </TodoContext.Provider>
      </TodosDispatch.Provider>
    );
}

