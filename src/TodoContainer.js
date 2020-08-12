import React, { useReducer, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE, CLEAR_TODO_LIST,  COMPLETE_ALL, CLEAR_COMPLETED  } from './reducer/actionTypes';
import todoReducer from './reducer/todoReducer';
import Todo from './components/Todo';
import TodoInput from './components/TodoInput';
import TodoContext from './context/todoContext';
import TodoCounter from './components/TodoCounter';
import useEditHooks from './components/hooks/editHook';


export default function TodoContainer() {
  //set initial state to context state
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const singleTodo = state.todoList.filter(todo => { return { todo }})
  const { countCompletedTodos } = useEditHooks(singleTodo);
  /****action creators****/
  //add a todo
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
            clearCompleted
          }}
        >
      <div className="App">
        <div className="todo-counter">
        { state.todoList.length
            ? <>
              {/* Total Todos: {state.todoList.length} */}
              <TodoCounter  countCompletedTodos={countCompletedTodos} todoList={state.todoList} />
            </>
            :  <p> There Are Currently No Todos To Do </p>
          }
       </div>
          <div style={{paddingBottom: '40px'}}>
            <TodoInput todo={singleTodo} countCompletedTodos={countCompletedTodos} todoList={state.todoList} />
          </div> 
          <div className="list" >
            {state.todoList.map((todo, index) => (
              <Todo key={todo.id} index={index} todo={todo}/>
            )
          )}   
        </div>
       
      </div>
      </TodoContext.Provider>
  );
}

