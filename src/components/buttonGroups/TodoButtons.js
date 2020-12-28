import React, { useContext }  from 'react';
import { Button, Responsive } from 'semantic-ui-react';
import { TodosDispatch } from '../../TodoContainer';
import { MetadataContext } from '../../context'
import { TodoContext }  from '../../context'
const TodoButtons = ({ displayDate, onSetEdit,  todo,  index, focus }) => { 
    const state = useContext(TodoContext);
    const { todoList } = state;
    const dispatch = useContext(TodosDispatch);
    const { checkHasSaved, setHasSaved, setUserTodoList } = useContext(MetadataContext);
    
    return (
      <Responsive
        as={Button.Group}
        style={{ minWidth: "150px", maxWidth: "330px" }}
      >
        {todo.completed ? (
          <>
            <Responsive
              as={Button}
              icon="undo"
              className="toggle"
              onClick={() => {
                dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id, index });
                // checkHasSaved();
                setHasSaved(false)
                setUserTodoList(todoList)
              }}
              basic
              color="green"
              maxWidth={802}
              style={{ marginLeft: "5px", minWidth: "35px", maxWidth: "85px" }}
            />
            <Responsive
              as={Button}
              icon="undo"
              className="toggle"
              content="Mark Incomplete"
              onClick={() => {
                dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id, index });
                // checkHasSaved();
                setHasSaved(false)
                setUserTodoList(todoList)
              }}
              basic
              color="green"
              minWidth={805}
              // maxWidth={1155}
              style={{ marginLeft: "10px", width: "175px" }}
            />
            <Responsive
              as={Button}
              basic
              color="blue"
              className="edit-todo"
              content={displayDate()}
              icon="tasks"
              style={{ minWidth: "65px", width: "180px" }}
              minWidth={805}
              // disabled={true}
            />
            <Responsive
              as={Button}
              basic
              color="red"
              icon="trash alternate"
              className="remove-todo"
              content="Remove Todo"
              onClick={() => {
                dispatch({ type: "REMOVE_TODO", payload: todo.id, index });
                // checkHasSaved();
                setHasSaved(false)
                setUserTodoList(todoList)
              }}
              style={{ width: '160px', maxWidth: '205px' }}
              minWidth={805}
            />
            <Responsive
              as={Button}
              basic
              color="red"
              icon="trash alternate"
              className="remove-todo"
              // content="Remove Todo"
              onClick={() => {
                dispatch({ type: "REMOVE_TODO", payload: todo.id, index });
                // checkHasSaved()
                setHasSaved(false)
                setUserTodoList(todoList)
              }}
              style={{ minWidth: "35px", maxWidth: "205px" }}
              maxWidth={801}
              // {...Responsive.onlyMobile}
            />
          </>
        ) : (
          <>
            <Responsive
              as={Button}
              icon="check"
              className="toggle"
              content="Complete"
              onClick={() => {
                dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id, index });
                // checkHasSaved()
                setHasSaved(false)
                setUserTodoList(todoList)
              }}
              color="green"
              style={{ marginLeft: "10px", width: "175px" }}
              minWidth={805}
            />
            <Responsive
              as={Button}
              icon="check"
              className="toggle"
              // content="Mark as Complete"
              onClick={() => {
                dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id, index });
                // checkHasSaved();
                setHasSaved(false)
                setUserTodoList(todoList)
              }}
              color="green"
              style={{
                marginLeft: "10px",
                minWidth: "35px",
                maxWidth: "270px",
              }}
              maxWidth={802}
            />

            <Responsive
              as={Button}
              color="blue"
              className="edit-todo"
              content="Edit Todo"
              icon="edit"
              onClick={() => { onSetEdit(); setUserTodoList(todoList); setHasSaved(false) }}
              style={{ minWidth: "180px", maxWidth: "215px" }}
              minWidth={805}
            />
            <Responsive
              as={Button}
              color="blue"
              className="edit-todo"
              // content="Edit Todo"
              icon="edit"
              onClick={() => { onSetEdit(); setUserTodoList(todoList); setHasSaved(false)}}
              style={{ minWidth: "35px", maxWidth: "270px" }}
              maxWidth={802}
            />
          </>
        )}
        <>
          {!todo.completed && (
            <>
              <Responsive
                as={Button}
                negative
                icon="trash alternate"
                className="remove-todo"
                content="Remove Todo"
                onClick={() => {
                  dispatch({ type: "REMOVE_TODO", payload: todo.id, index });
                  setUserTodoList(todoList);
                  setHasSaved(false)
                }}
                style={{ width: '160px', maxWidth: '205px' }}
                minWidth={805}
              />
              <Responsive
                as={Button}
                negative
                icon="trash alternate"
                className="remove-todo"
                // content="Remove Todo"
                onClick={() => {
                  dispatch({ type: "REMOVE_TODO", payload: todo.id, index });
                  setUserTodoList(todoList);
                  setHasSaved(false)
                }}
                style={{ minWidth: "35px", maxWidth: "195px" }}
                maxWidth={802}
                // {...Responsive.onlyMobile}
              />
            </>
          )}
        </>
      </Responsive>
    );
      }
      export default TodoButtons;