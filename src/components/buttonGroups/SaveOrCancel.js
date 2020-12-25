import React from 'react';
import { Responsive, Button } from 'semantic-ui-react';

//displays the save or cancel button cluster
const SaveOrCancel = ({ id, saveEditText, onSetEdit, index, editText }) => (
  
  <>
    <Responsive as={Button.Group} maxWidth={768} style={{ minWidth: '145px', marginLeft:'5px'}}>
      < Responsive as={Button} color='blue' icon='save' maxWidth={768}   
        onClick = {() => {saveEditText(editText, id, index); onSetEdit()}} 
        />    
        <Responsive as={Button.Or} maxWidth={768} />
        <Responsive as={Button} negative icon='cancel' maxWidth={768}  
          onClick={() => onSetEdit()} 
        />
    </Responsive>
      <Responsive as={Button.Group} style={{width: '345px'}} minWidth={1024}>
        < Responsive as={Button} color='blue' icon='save' content="Save" minWidth={1024}  
          onClick={() => {saveEditText(editText, id, index); onSetEdit()}} 
        />    
        <Responsive as={Button.Or} minWidth={1024} />
        <Responsive as={Button} negative icon='cancel' content="Cancel" minWidth={1024} 
          onClick={() => onSetEdit()} 
        />
      </Responsive>
  </>
);

export default SaveOrCancel;
