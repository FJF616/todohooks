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

    case REMOVE_TODO:   
      const index = action.payload 
        return {
          ...state,
          todoList: [...state.todoList.filter(todo => todo.id !== index)]
        }
    case EDIT_TODO:
      const editedText = action.payload.text
      const todoId = action.payload.id
      const indx = state.todoList.findIndex(editTodo => editTodo.id === todoId);
      const todo = state.todoList.filter(editTodo => editTodo.id === todoId)
      // const editedTodo = Object.assign({}, state.editedTodoList[todoIndex])
      todo.text = editedText;
      state.todoList.splice(todoId, 1, todo);
      
        return {
            ...state,
            todoList: [...state.todoList]
          }
    case TOGGLE_COMPLETE:
    const idx = action.payload
    if (state.todoList[idx].completed === false) {
      state.todoList[idx].completed = true
    } else {
      state.todoList[idx].completed = false
    }
        return {
          ...state,
          todoList: [...state.todoList]    
      }
    default:
      return state;
  }
}