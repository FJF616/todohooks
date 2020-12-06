import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react';
import { TodoCounter, ProgressBar } from '../../components';


export default function VisibilitySwitch() {

  const [showProgress, setShowProgress] = useState(true);
  const handleProgress = () => {
    setShowProgress(!showProgress);
  };
  return (
    <>
      <Checkbox
        checked={showProgress}
        label="progressbar"
        onClick={() => handleProgress()}
        radio
        style={{paddingBottom: '15px'}}
      />

      {showProgress ? <ProgressBar /> : <TodoCounter />}
    </>
  );
  
}