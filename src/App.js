import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([
    {
      todo: "example task",
      completed: false
    }
  ]);

  //adds a todo to the todo list
  const addTodo = todo => {
    const newTodo = [...todoList, { todo }];
    setTodoList(newTodo);
  };

  //indicates if todo is complete
  const completeTodo = index => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = true;
    setTodoList(updatedTodoList);
  };

  //removes a todo from the list
  const removeTodo = index => {
    const updatedTodoList = todoList.splice();
    updatedTodoList.splice(index, 1);
  };
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
