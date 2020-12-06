import React, { useContext } from "react";
import { Progress } from "semantic-ui-react";
import useEditHooks from "../components/hooks/editHook";
import TodoContext from "../context/todoContext";
//displays total number of todos and number of todos marked as completed
export default function ProgressBar() {
  const state = useContext(TodoContext);
  const { todoList } = state;
  const { countCompletedTodos } = useEditHooks();
  const completedTodos = countCompletedTodos(todoList);
  const totalTodos = todoList.length;
  
  return <Progress value={completedTodos} total={totalTodos} progress='percent' size='small' color='teal' />;
}
