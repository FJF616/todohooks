import { useState, useContext, useEffect } from 'react';
import TodoContext from '../../context/todoContext';

//custom hook for editing a todo
export function useEditHooks(todo) {
  const { todoList } = useContext(TodoContext);
  const [editing, setEditing] = useState(todoList.editing);
  const [editText, setEditText] = useState(todo.text);

  // stores input text that will replace original text
  function onSetEditText(text) {
    setEditText(text);
  }

  // status flag 
  function onSetEdit() {
    editing === false ? setEditing(true) : setEditing(false);
  }

  //saves the edited text to context state
  function saveEditText(data, id) {
    const editTodoText = todoList
      .filter(newTodo => newTodo.id === id)
      .map(property => {
        property.text = data;
        return {
          property
        }
      });
    onSetEdit();
    return {
      editTodoText
    }
  }

  //counts all todos that have been marked completed
  function countCompletedTodos(todoList) {
    const completedTodos = todoList.filter(todo => todo.completed).length;
    return completedTodos;
  }

  function checkForCompleteTodos(todoList) {
    const countedTodos = countCompletedTodos(todoList);
    return countedTodos > 0 ? true : false;
  }
  
  useEffect(() => {
    saveEditText(editText, todo.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    editing,
    editText,
    onSetEdit,
    onSetEditText,
    saveEditText,
    countCompletedTodos,
    checkForCompleteTodos
  }
}
export default useEditHooks;