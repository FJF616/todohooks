import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE, CLEAR_TODO_LIST, COMPLETE_ALL } from './actionTypes';
import uuid from 'uuid';


export default function todoReducer(state, action) {
  switch (action.type) {

    case ADD_TODO: 
      if(!action.payload) {
        return state;
      } 
        return {
          ...state,
          todoList: [...state.todoList, 
            {
              id: uuid.v4(),
              text: action.payload,
              completed: false,
              editing: false,
              // editText: ""
            }
          ]
        };

    case REMOVE_TODO:   
      const idx = action.index
     
      const todos = state.todoList.filter((todo, index) => index !== idx)
      
        return {
          ...state,
          todoList: [...todos]
        };
      
    case TOGGLE_COMPLETE:
        const todoID = action.payload
        const todoCompleted = state.todoList.filter(newTodo => newTodo.id === todoID)
            .map(property => { 
              if (property.completed === false) {
                property.completed = true;
              } else {
                property.completed = false;
              }
              return property
          });  
          return {
              ...state,
              todoCompleted
          };

    case CLEAR_TODO_LIST:
          state.todoList.splice(0, state.todoList.length)
       
          return {
          ...state,
            todoList: state.todoList
          }
    case COMPLETE_ALL:
    const markCompleteTodos = state.todoList.map(todo => {
      if (todo.completed === false) {
        todo.completed = true;
      }
      return todo   
     })
   
    return {
      ...state,
      todoList: [...markCompleteTodos]
  }
    
  default:
    return state
  }
}