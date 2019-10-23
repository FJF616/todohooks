import React from 'react';
import { Button } from 'semantic-ui-react';

const  SaveOrCancel = ({ id, saveContext, onSetEdit, index, editText }) => (
  < Button.Group >
    < Button color='blue' icon='save' style={{width:'83px'}} onClick = {
      () => {saveContext(editText, id, index); onSetEdit()}} />    
      <Button.Or / >
    <Button negative icon='cancel' style={{width: '82px'}} onClick={
      () => onSetEdit()} />
  </Button.Group>
);

export default SaveOrCancel;