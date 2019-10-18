//This file is not in use

import React, { useState, useContext, useEffect } from 'react';
import TodoContext from '../context/todoContext';
import uuid from 'uuid';

export default function useTodoHooks(todo) {
  const { todoList } = useContext(TodoContext); 
  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  
  export function toggleEdit() {
    return {
      setEditing({ editing: !state.editing });
    }
  };
  export function onEdit(text) {
    return {
      setEditText(text);
    }
  }
  export function saveContext(data, id) {
    // const newList = [...todoList];
    const newTodo = todoList.filter(editTodo => {
      if (editTodo.id === id){
        editTodo.text = data;
        return editTodo
      }
      todoList = [...todoList, {newTodo}]
      toggleEdit();
      return todoList
    })
  }
  useEffect(() => {
    saveContext(editText, todo.id)
  }, [])

  return {
    
    saveContext,
    toggleEdit
  }
}