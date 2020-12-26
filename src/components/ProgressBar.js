import React, { useContext } from "react";
import { Progress } from "semantic-ui-react";
import useEditHooks from "../components/hooks/editHook";
import { TodoStateContext } from "../TodoContainer";
//displays total number of todos and number of todos marked as completed
export default function ProgressBar() {
  const state = useContext(TodoStateContext);
  const { todoList } = state;
  const { countCompletedTodos } = useEditHooks();
  const completedTodos = countCompletedTodos(todoList);
  const totalTodos = todoList.length;
  
  return <Progress value={completedTodos} total={totalTodos} progress='percent' size='medium' color='teal' />;
}
