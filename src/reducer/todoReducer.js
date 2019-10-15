import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_COMPLETE, HANDLE_INPUT} from './actionTypes';
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
              completed: false
            }
          ]
        };
    // case HANDLE_INPUT:

    case REMOVE_TODO:   
      const index = action.payload 
        return {
          ...state,
          todoList: [...state.todoList.filter(todo => todo.id !== index)]
        }
    case EDIT_TODO:
      const editedTodoList = [...state.todoList]
      index = action.payload
      // const indx = state.todoList.findIndex(editTodo => editTodo.id === state.todoList[]);
      // const todo = Object.assign({}, state.todoList[indx]);
      
      // todo.text = action.payload.text;
      // editedTodoList.splice(index, 1, todo);
      
        return {
            ...state,
            todoList: editedTodoList
          }
    case TOGGLE_COMPLETE:
      const idx = action.payload
      if (state.todoList[idx].completed === true) {
        state.todoList[idx].completed = false;
      } else {
        state.todoList[idx].completed = true;
      }
        return {
          ...state,
          todoList: state.todoList    
      }
    default:
      return state;
  }
}