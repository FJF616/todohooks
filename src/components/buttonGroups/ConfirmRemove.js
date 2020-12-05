import React, { useState, useContext } from 'react';
import { Button, Confirm, Popup, Responsive } from 'semantic-ui-react';
import { TodosDispatch } from '../../TodoContainer';
export default function ConfirmRemove({ setCleared, cleared, input, todoList  }) {
  const dispatch = useContext(TodosDispatch)
  const [checkOpen, setCheckOpen] = useState(false);

  const open = () => setCheckOpen(true);
  const close = () => setCheckOpen(false);

  return (
    <>
    <Responsive
            as={Button}
            minWidth={1024}
            color="google plus"
            className="clear"
            icon="refresh"
            content="Remove All"
            onClick={() => open()}
            disabled={input.length || cleared || todoList.length === 0 
                  ? true 
                  : false
                }
            
      />
      <Popup content="Removeall"
        trigger={
      <Responsive
            as={Button}
            maxWidth={768}
            color="google plus"
            style={{width: '50px'}}
            className="clear"
            icon="refresh"
            // content="Clear Todo List"
            onClick={() => open()}
            disabled={input.length || cleared || todoList.length === 0 
                  ? true 
                  : false
                }
            
          />}
      />
        <Confirm
          open={checkOpen}
          onCancel={() => close()}
          onConfirm = {
            () => {
              dispatch({ type: 'CLEAR_TODO_LIST'});
              setCleared(true);
              close();
            }
          }
        />
    </>
  )
}