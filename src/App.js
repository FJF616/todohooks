import React, { useState } from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([
    {
      todo: "example task",
      completed: false
    }, 
    {
      todo: "another example task",
      completed: false
    },
  ]);

  //adds a todo to the todo list
  const addTodo = todo => {
    const newTodo = [...todoList, { todo }];
    setTodoList(newTodo);
  };

  //indicates if todo is complete
  const completeTodo = index => {
    const updatedTodoList = [...todoList];
    if (updatedTodoList[index].completed === true) {
      updatedTodoList[index].completed = false;
    } else {
      updatedTodoList[index].completed = true;
    }
        setTodoList(updatedTodoList);
  };

  //removes a todo from the list
  const removeTodo = index => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };
  return (
    <div className="App">
      <div className="list">
        {todoList.map((todo, index) => (
          <Todo key={index} index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
        ))}
        <div style={{display:"inline-flex"}}>
        Enter A Todo: <TodoInput addTodo={addTodo} />
      </div>
      </div>
    </div>
  );
}

export default App;
