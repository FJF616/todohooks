import React from 'react';
import { Statistic } from 'semantic-ui-react';

//displays total number of todos and number of todos marked as completed
export default function TodoCounter({ todo, todoList, countCompletedTodos }) {
  const completedTodos = countCompletedTodos(todoList);
  const totalTodos = todoList.length;
  const items = [
    { key: 'Total', value: totalTodos, label: 'Total Todos' },
    { key: 'Completed', value: completedTodos, label: 'Completed Todos' }
  ]
  return (
    <Statistic.Group items={items}/>
  )
}
