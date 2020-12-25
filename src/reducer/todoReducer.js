import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE, CLEAR_TODO_LIST, CLEAR_COMPLETED, COMPLETE_ALL, LOAD_SAVED_TODO_LIST } from './actionTypes';
import uuid from 'uuid';


export default function todoReducer(state, action) {
  switch (action.type) {
    //add a new todo to the list
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
    //removes a todo
    case REMOVE_TODO:   
      const todos = state.todoList.filter((todo, index) => index !== action.index)
      return {
        ...state,
         todoList: todos
      };
    //toggle whether or not a todo is complete
    case TOGGLE_COMPLETE:
        const todoID = action.payload
        const todoCompleted = state.todoList.filter(newTodo => newTodo.id === todoID)
            .map(property => { 
              property.completed = !property.completed
              return property
          });  
          return {
              ...state,
              todoCompleted
          };
    //clears all todos
    case CLEAR_TODO_LIST:
          state.todoList.splice(0, state.todoList.length)  
          return {
          ...state,
            todoList: state.todoList
          }
    //clears only the completed todos
    case CLEAR_COMPLETED:
          const incompleteTodos = state.todoList.filter(todo => todo.completed === false);
          return {
            ...state,
            todoList: [...incompleteTodos]
          } 
    //marks all todos complete
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
  case LOAD_SAVED_TODO_LIST: 
    return {
      ...state,
      todoList: [...action.payload] 
    }
  default:
    return state
  }
}