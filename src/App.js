import React, { useReducer, useContext } from 'react';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_COMPLETE  } from './reducer/actionTypes';
import todoReducer from './reducer/todoReducer';
import Todo from './Todo';
import TodoInput from './TodoInput';
import TodoContext from './context/todoContext';
import './App.css';


function App() {
  //set initial state to context state
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  //action creators
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo
    });
  };

  const editTodo = (index, id, text) => {
    dispatch({
      type: EDIT_TODO,
      payload: id,text
    });
  };

  const removeTodo = (id) => {
    dispatch({
      type: REMOVE_TODO,
      payload: id
    });
  };

  const toggleComplete = (id, index) => {
    dispatch({
      type: TOGGLE_COMPLETE,
      payload: id, index
    });
  };

    return (
      <TodoContext.Provider
          value={{
            todoList: state.todoList,
            addTodo,
            editTodo,
            removeTodo,
            toggleComplete,
            
            
          }}
        >
      <div className="App">
        <div className="list">
          {state.todoList.map((todo, index) => (
            <Todo 
              key={todo.id} 
              index={index}
              todo={todo}
            />
          ))}
          <div style={{display:"inline-flex"}}>
          Enter A Todo: <TodoInput  />
        </div>
        </div>
      </div>
      </TodoContext.Provider>
  );
}

export default App;
