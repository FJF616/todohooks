import React, { useContext }  from 'react';
import { Button, Responsive } from 'semantic-ui-react';
import { TodosDispatch } from '../../TodoContainer';
import { MetadataContext } from '../../context'
const TodoButtons = ({ displayDate, onSetEdit,  todo,  index }) => { 
    const dispatch = useContext(TodosDispatch);
    const { checkHasSaved } = useContext(MetadataContext);
    
    return (
      <Responsive
        as={Button.Group}
        style={{ minWidth: "155px", maxWidth: "290px" }}
      >
        {todo.completed ? (
          <>
            <Responsive
              as={Button}
              icon="undo"
              className="toggle"
              onClick={() => {
                dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id, index });
                checkHasSaved();
              }}
              basic
              color="green"
              maxWidth={768}
              style={{ marginLeft: "5px", minWidth: "35px", maxWidth: "85px" }}
            />
            <Responsive
              as={Button}
              icon="undo"
              className="toggle"
              content="Mark Incomplete"
              onClick={() => {
                dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id, index });
                checkHasSaved();
              }}
              basic
              color="green"
              minWidth={1024}
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
              minWidth={1024}
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
                checkHasSaved();
              }}
              // style={{ maxWidth: "px" }}
              minWidth={1024}
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
                checkHasSaved()
              }}
              style={{ minWidth: "35px", maxWidth: "205px" }}
              maxWidth={768}
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
                checkHasSaved()
              }}
              color="green"
              style={{ marginLeft: "10px", width: "175px" }}
              minWidth={1024}
            />
            <Responsive
              as={Button}
              icon="check"
              className="toggle"
              // content="Mark as Complete"
              onClick={() => {
                dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id, index });
                checkHasSaved();
              }}
              color="green"
              style={{
                marginLeft: "10px",
                minWidth: "35px",
                maxWidth: "270px",
              }}
              maxWidth={768}
            />

            <Responsive
              as={Button}
              color="blue"
              className="edit-todo"
              content="Edit Todo"
              icon="edit"
              onClick={() => { onSetEdit(); checkHasSaved();}}
              style={{ minWidth: "180px", maxWidth: "215px" }}
              minWidth={1024}
            />
            <Responsive
              as={Button}
              color="blue"
              className="edit-todo"
              // content="Edit Todo"
              icon="edit"
              onClick={() => { onSetEdit(); checkHasSaved(); }}
              style={{ minWidth: "35px", maxWidth: "270px" }}
              maxWidth={768}
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
                  checkHasSaved();
                }}
                style={{ width: '145px', maxWidth: '195px' }}
                minWidth={1024}
              />
              <Responsive
                as={Button}
                negative
                icon="trash alternate"
                className="remove-todo"
                // content="Remove Todo"
                onClick={() => {
                  dispatch({ type: "REMOVE_TODO", payload: todo.id, index });
                  checkHasSaved();
                }}
                style={{ minWidth: "35px", maxWidth: "195px" }}
                maxWidth={768}
                // {...Responsive.onlyMobile}
              />
            </>
          )}
        </>
      </Responsive>
    );
      }
      export default TodoButtons;