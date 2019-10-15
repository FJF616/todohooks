import React, { useState, useReducer, useContext } from 'react';
import uuid from 'uuid';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_COMPLETE  } from './reducer/actionTypes';
import todoReducer from './reducer/todoReducer';
import Todo from './Todo';
import TodoInput from './TodoInput';
import TodoContext from './context/todoContext';
import './App.css';


function App() {
  // const [todoList, setTodoList] = useState([
  //   {
  //     todo: "example task",
  //     completed: false
  //   }, 
  //   {
  //     todo: "another example task",
  //     completed: false
  //   },
  // ]);
  
  //adds a todo to the todo list
  // const addTodo = todo => {
  //   const newTodo = [...todoList, { todo }];
  //   setTodoList(newTodo);
  // };
  // //indicates if todo is complete
  // const completeTodo = index => {
  //   const updatedTodoList = [...todoList];
  //   if (updatedTodoList[index].completed === true) {
  //     updatedTodoList[index].completed = false;
  //   } else {
  //     updatedTodoList[index].completed = true;
  //   }
  //       setTodoList(updatedTodoList);
  // };

  // //removes a todo from the list
  // const removeTodo = index => {
  //   const updatedTodoList = [...todoList];
  //   updatedTodoList.splice(index, 1);
  //   setTodoList(updatedTodoList);
  // };
  // const initialState = {
  //   todoList: [
  //     {
  //       id: 1,
  //       text: "eat",
  //       completed: false
  //     }  
  //   ]
  // }
  // const context = useContext(TodoContext);
  const initialState = useContext(TodoContext)
  // const context = useContext(TodoContext)
  const [state, dispatch] = useReducer(todoReducer, initialState)
  
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo
    })
  }
  const removeTodo = (index) => {
    dispatch({
      type: REMOVE_TODO,
      payload: index
    })
  }
  const toggleComplete = (index) => {
    dispatch({
      type: TOGGLE_COMPLETE,
      payload: index
    })
  }

    return (
      <TodoContext.Provider
        value={{
          
          addTodo,
          removeTodo,
          toggleComplete
        }}
        >
      <div className="App">
        <div className="list">
          {state.todoList.map((todo) => (
           
            
              <Todo 
                key={todo.id} 
                index={todo.id}
                todo={todo}
                // completeTodo={completeTodo}
                // removeTodo={removeTodo}
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
