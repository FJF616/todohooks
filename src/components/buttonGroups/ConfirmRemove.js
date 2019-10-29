import React, { useState } from 'react';
import { Button, Confirm, Responsive } from 'semantic-ui-react';

export default function ConfirmRemove({ clearTodoList, setCleared, cleared, input, todoList  }) {

  const [checkOpen, setCheckOpen] = useState(false);

  const open = () => setCheckOpen(true);
  const close = () => setCheckOpen(false);

  return (
    <>
    <Responsive
            as={Button}
            minWidth={1155}
            color="google plus"
            className="clear"
            icon="refresh"
            content="Clear Todo List"
            onClick={() => open()}
            disabled={input.length || cleared || todoList.length === 0 
                  ? true 
                  : false
                }
            
      />
      <Responsive
            as={Button}
            maxWidth={1154}
            color="google plus"
            style={{width: '40px'}}
            className="clear"
            icon="refresh"
            // content="Clear Todo List"
            onClick={() => open()}
            disabled={input.length || cleared || todoList.length === 0 
                  ? true 
                  : false
                }
            
      />
        <Confirm
          open={checkOpen}
          onCancel={() => close()}
          onConfirm = {
            () => {
              clearTodoList();
              setCleared(true);
              close();
            }
          }
        />
    </>
  )
}