import React from 'react';
import { Responsive, Button } from 'semantic-ui-react';
const width = 768

//displays the save or cancel button cluster
const SaveOrCancel = ({ id, saveEditText, onSetEdit, index, editText }) => (
  
  <>
    <Responsive as={Button.Group} style={{minWidth: '175px', width: '370px'}}>
      < Responsive as={Button} color='blue' icon='save' maxWidth={width}   
        onClick = {() => {saveEditText(editText, id, index); onSetEdit()}} 
        />    
        <Responsive as={Button.Or} maxWidth={width} />
        <Responsive as={Button} negative icon='cancel' maxWidth={width}  
          onClick={() => onSetEdit()} 
        />
        < Responsive as={Button} color='blue' icon='save' content="Save" minWidth={width}  
          onClick={() => {saveEditText(editText, id, index); onSetEdit()}} 
        />    
        <Responsive as={Button.Or} minWidth={width} />
        <Responsive as={Button} negative icon='cancel' content="Cancel" minWidth={width} 
          onClick={() => onSetEdit()} 
        />
    </Responsive >
  </>
);

export default SaveOrCancel;
