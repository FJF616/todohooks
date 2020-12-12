import React, { useContext } from 'react';
import { Button, Popup, Responsive } from 'semantic-ui-react';
import { TodosDispatch } from '../../TodoContainer';
import { TodoContext, MetadataContext } from '../../context';
import ConfirmRemove from './ConfirmRemove';

//This component will display the button group used when adding a todo.  
const InputGroup = ({input, onSubmit, cleared, completedTasks, setCleared, setCompletedTasks }) => {
  const { useAuth0, setHasSaved } = useContext(MetadataContext);
  const { isAuthenticated } = useAuth0;
  const state = useContext(TodoContext);
  const { todoList } = state;
  const dispatch = useContext(TodosDispatch);
  return (
    <Responsive
      as={Button.Group}
      fluid
      style={{ minWidth: "150px", maxWidth: "355px", margin: "2px" }}
    >
      {/* this button saves each todo*/}
      <Responsive
        as={Button}
        //for desktop resolutions
        minWidth={805}
        positive
        type="submit"
        icon={!input.length ? "reply" : "save"}
        style={{  width: "155px", minWidth: '130px'}}
        content={!input.length ? "Enter a Todo" : "Save Todo"}
        onClick={onSubmit}
        disabled={
          isAuthenticated ? false : 
          input.length || todoList.length === 0 ? false : true}
      />
      <Popup
        content="Add a todo"
        position="bottom center"
        on="hover"
        trigger={
          <Responsive
            as={Button}
            //for mobile device resolutions
            maxWidth={802}
            positive
            type="submit"
            icon={!input.length ? "reply" : "save"}
            style={{ width: "50px" }}
            onClick={onSubmit}
            disabled={
              isAuthenticated ? false :
              input.length || todoList.length === 0 ? false : true}
          />
        }
      />
      {/* this button marks every todo as complete */}
      <Responsive
        as={Button}
        minWidth={805}
        className="complete"
        icon="checkmark"
        style={{ minWidth: "135px", width: "150px", maxWidth: "160px" }}
        color="instagram"
        content="Complete All"
        onClick={() => {
          dispatch({ type: "COMPLETE_ALL", payload: todoList });
          setHasSaved(false)
        }}
        disabled={
          input.length ||
          cleared ||
          todoList.length === 0 ||
          completedTasks === todoList.length
            ? true
            : false
        }
      />
      <Popup
        content="Complete all"
        on="hover"
        trigger={
          <Responsive
            as={Button}
            maxWidth={802}
            className="complete"
            icon="checkmark"
            style={{ width: "55px" }}
            color="instagram"
            // content="Complete All"
            onClick={() => {
              dispatch({ type: "COMPLETE_ALL", payload: todoList });
              setHasSaved(false)
            }}
            disabled={
              input.length ||
              cleared ||
              todoList.length === 0 ||
              completedTasks === todoList.length
                ? true
                : false
            }
          />
        }
      />
      <Responsive
        as={Button}
        minWidth={805}
        color="linkedin"
        className="complete"
        style={{ width: "150px" }}
        icon="exchange"
        content="Clear Completed"
        onClick={() => {
          dispatch({ type: "CLEAR_COMPLETED", payload: todoList });
          setCompletedTasks(0);
          setHasSaved(false)
        }}
        disabled={
          input.length || cleared || completedTasks === 0 ? true : false
        }
      />
      <Popup
        content="Clear Completed"
        trigger={
          <Responsive
            as={Button}
            maxWidth={802}
            color="linkedin"
            className="complete"
            icon="exchange"
            style={{ width: "55px" }}
            onClick={() => {
              dispatch({ type: "CLEAR_COMPLETED", payload: todoList });
              setCompletedTasks(0);
              setHasSaved(false);
            }}
            disabled={
              input.length || cleared || completedTasks === 0 ? true : false
            }
          />
        }
      />
      <ConfirmRemove
        setCleared={setCleared}
        input={input}
        cleared={cleared}
        todoList={todoList}
      />
    </Responsive>
  );
    }
export default InputGroup;