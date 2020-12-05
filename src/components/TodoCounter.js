import React, { useContext }  from 'react';
import { Statistic } from 'semantic-ui-react';
import useEditHooks from '../components/hooks/editHook';
import TodoContext from '../context/todoContext';
//displays total number of todos and number of todos marked as completed
export default function TodoCounter() {
  const state = useContext(TodoContext);
  const { todoList } = state;
  const { countCompletedTodos } = useEditHooks();
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
