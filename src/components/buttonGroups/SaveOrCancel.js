import React from 'react';
import { Button } from 'semantic-ui-react';

const  SaveOrCancel = ({ id, saveContext, onSetEdit, index, editText }) => (
  < Button.Group style={{width: '370px'}}>
    < Button color='blue' content="Save" icon='save' style={{width:'85px'}} onClick = {
        () => {saveContext(editText, id, index); onSetEdit()}} 
      />    
      <Button.Or / >
    <Button negative icon='cancel' content="Cancel" style={{width: '80px'}} onClick={
      () => onSetEdit()} 
    />
  </Button.Group>
);

export default SaveOrCancel;