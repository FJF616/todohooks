import React from 'react';
import { Responsive, Button } from 'semantic-ui-react';


const SaveOrCancel = ({ id, saveContext, onSetEdit, index, editText }) => (
  <>
    <Button.Group style={{width: '370px'}}>
      < Responsive as={Button} color='blue' icon='save' maxWidth={768}   onClick = {
          () => {saveContext(editText, id, index); onSetEdit()}} 
        />    
          <Responsive as={Button.Or} maxWidth={768} />
      <Responsive as={Button} negative icon='cancel' maxWidth={768}  onClick={
        () => onSetEdit()} 
      />
      < Responsive as={Button} color='blue' icon='save' content="Save" minWidth={768}   onClick = {
          () => {saveContext(editText, id, index); onSetEdit()}} 
        />    
          <Responsive as={Button.Or} minWidth={768} />
      <Responsive as={Button} negative icon='cancel' content="Cancel" minWidth={768} onClick={
        () => onSetEdit()} 
      />
    </Button.Group >
  </>
);

export default SaveOrCancel;
