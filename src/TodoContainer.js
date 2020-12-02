import React, { useEffect, useState, useReducer, useContext } from 'react';
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
export default function TodoContainer() {
  //set initial state to context state
  const { user } = useAuth0();
  const metadataKey = "https://everybodyleave.com/claims/user_metadata"
  // const [userTodoList, setUserTodoList] = useState(user[metadataKey].todoList)
  // const { userMetadata }   = useContext(MetadataContext);
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { saveUserTodoList } = useSaveTodoList(state.todoList)
  // const singleTodo = state.todoList.filter(todo => { return { todo }})
  // useEffect(() => {
  //   if (!Array.isArray(userMetadata) || !userMetadata.length) {
  //     initialState = context
  //   } else {
  //     initialState = userMetadata
  //   }
  // }, [])
  
  
  
  /****action creators****/
  //add a todo
  const loadSavedTodoList = (savedList) => {
    dispatch({
      type: LOAD_SAVED_TODOLIST,
      payload: savedList
    });
  };
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo
    });
  };

  //remove a todo
  const removeTodo = (id, index) => {
    dispatch({
      type: REMOVE_TODO,
      payload: id, index
    });
  };

  //remove entire todo list
  const clearTodoList = () => {
    dispatch({
      type: CLEAR_TODO_LIST,
    })
  }

  // toggle complete/incomplete
  const toggleComplete = (id, index) => {
    dispatch({
      type: TOGGLE_COMPLETE,
      payload: id, index
    });
  };

  //marks all todos as complete
  const completeAll = (todoList) => {
    dispatch({
      type: COMPLETE_ALL,
      payload: todoList
    })
  }

  //removes all completed todos from todoList
  const clearCompleted = (todoList) => {
    dispatch({
      type: CLEAR_COMPLETED,
      payload: todoList
    })
  }
  const handleSaveList = async () => {
    await saveUserTodoList();
  }
  // useEffect(() => {
  //   if(Array.isArray(userMetadata) || userMetadata.length) {
  //     localStorage.setItem('savedTodoList', userMetadata)
  //   }
  // },[userMetadata])
  /***********************/

    return (
      <TodoContext.Provider
          value={{
            todoList: state.todoList,
            addTodo,
            clearTodoList,
            removeTodo,
            toggleComplete, 
            completeAll,
            clearCompleted,
            loadSavedTodoList,
            // userMetadata,
          }}
        >
      <div className="App">
        <div className="todo-counter">
        { state.todoList.length
            ? <>
                <TodoCounter  todoList={state.todoList} />
              </>
            :  <p> There Are Currently No Todos To Do </p>
          }
       </div>
          <div style={{paddingBottom: '40px'}}>
             <TodoInput  todoList={state.todoList}/>
          </div> 
          <div className="list" >
            {state.todoList.map((todo, index) => (
              <Todo key={todo.id} index={index} todo={todo}/>
            )
          )}   
        </div>
        <button onClick={() => handleSaveList()}> save todos </button>
      </div>
      </TodoContext.Provider>
  );
}

