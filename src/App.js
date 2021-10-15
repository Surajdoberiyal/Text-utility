import Navbar from './Component/Navbar'
import TextUtils from './Component/TextUtils';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#0B0B45';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }


  return (
   <>
    <Navbar title="Developer" name="About-us" mode={mode} toggleMode={toggleMode} />
    <TextUtils title="Enter your text here for easy modifying" mode={mode} />
   </>
  );
}

export default App;
