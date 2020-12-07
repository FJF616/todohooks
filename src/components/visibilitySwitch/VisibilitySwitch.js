import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react';
import { TodoCounter, ProgressBar } from '../../components';

//shows/hides progress bar. when progress bar is hidden, the todo counter is visible and vice versa
export default function VisibilitySwitch() {

  const [showProgress, setShowProgress] = useState(true);
  const handleProgress = () => {
    setShowProgress(!showProgress);
  };
  return (
    <>
      <Checkbox
        checked={showProgress}
        label={showProgress ? "progressbar" : "show progressbar"}
        onClick={() => handleProgress()}
        radio
        style={{paddingBottom: '15px'}}
      />

      {showProgress ? <ProgressBar /> : <TodoCounter />}
    </>
  );
  
}