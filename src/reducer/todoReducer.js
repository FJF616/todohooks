import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE } from './actionTypes';
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
              // editing: false,
              editText: ""
            }
          ]
        };

    case REMOVE_TODO:   
      const idx = action.index
      const newTodos = state.todoList.filter((todo, index) => index != idx)
      
        return {
          ...state,
          todoList: [...newTodos]
        }
   
    case TOGGLE_COMPLETE:
        const todoID = action.payload
        const todoIdx = action.index
        const todoTask = state.todoList.filter(todo => todo.id === todoID)
        const todoCompleted = state.todoList.filter(newTodo => newTodo.id === todoID)
            .map(property => { 
              if (property.completed === false) {
                property.completed = true;
              } else {
                property.completed = false;
              }
          });  
          return {
              ...state,
              todoList: [...state.todoList]   
          }
    default:
      return state
  }
}