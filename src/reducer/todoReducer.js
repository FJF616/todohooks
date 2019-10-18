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
      const id = action.id;
      const idx = action.index
      
      state.todoList.splice(idx, 1)
        return {
          ...state,
          todoList: [...state.todoList]
        }
    // case EDIT_TODO:
    //   const todoIndex = action.index
    //   const editedText = action.text
    //   const newList = [...state.todoList]
    //   const todoId = action.id
    //   const todoText = newList.filter(editTodo => editTodo.id === todoId)
    //   todoText.text = editedText

      // state.todoList.splice(todoId, 1, editedText);
      
        // return {
        //     ...state,
        //     todoList: [...state.todoList]
        //   }
    case TOGGLE_COMPLETE:
        const todoID = action.payload
        const todoIdx = action.index
        const todoTask = state.todoList.filter(todo => todo.id === todoID)
        const todoCompleted = state.todoList.filter(newTodo => newTodo.id === todoID)
            .map(property => { 
              if (property.completed === false) {
                property.completed = true;
                // state.todoList.splice(todoIdx, 1, property)
              } else {
                property.completed = false;
                // state.todoList.splice(todoIdx, 1, property)
              }
              return state.todoList
          })
      
            return {
              ...state,
              todoList: [...state.todoList]   
          }
    default:
      return state;
  }
}