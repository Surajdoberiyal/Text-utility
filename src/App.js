import Navbar from './Component/Navbar'
import TextUtils from './Component/TextUtils';
import React, { useState } from 'react';
import { Alert } from './Component/Alert';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
         setAlert({
        msg: message,
        type:  type
         })
         setTimeout(() => {
          setAlert(null);
         }, 1600);
  }



  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#0B0B45';
      showAlert("Dark mode is enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled", "success")

    }
  }


  return (
   <>
    <Navbar title="Developer" name="About-us" mode={mode} toggleMode={toggleMode} />
    <Alert  alert={alert} />
    <TextUtils  showAlert={ showAlert} title="Enter your text here for easy modifying" mode={mode} />
   </>
  );
}

export default App;
