import { useState, useContext, useEffect } from 'react';
import TodoContext from '../context/todoContext';

//custom hook for editing a todo
export default function useTodoHooks(todo) {
  const { todoList } = useContext(TodoContext); 
  const [editing, setEditing] = useState(todoList.editing);
  const [editText, setEditText] = useState(todo.text);
  
  
  function onSetEditText(text) {
      setEditText(text);
  }
  function onSetEdit() {
    editing === false ? setEditing(true) : setEditing(false);
  }

  function saveContext(data, id, index) {
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
 
  useEffect(() => {
    saveContext(editText, todo.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    editing,
    editText,
    onSetEdit,
    onSetEditText,
    saveContext,
  }
}