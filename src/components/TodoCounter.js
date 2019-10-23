import React from 'react';


export default function TodoCounter({ todo, todoList, countCompletedTodos }) {
  const completedTodos = countCompletedTodos(todoList);
  return (
    <div>
      Completed Todos: {completedTodos}
    </div>
  )
}
