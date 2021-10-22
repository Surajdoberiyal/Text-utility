import Navbar from "./Component/Navbar";
import TextUtils from "./Component/TextUtils";
import React, { useState} from "react";
import { Alert } from "./Component/Alert";
import About from "./Component/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0B0B45";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="Developer"
        name="About-us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/">
        <TextUtils
        showAlert={showAlert}
        title="Try TextUtils - word counter, character counter, remove extra spaces"
        mode={mode}
      />
        </Route>    
        <Route exact path="/about">
        <About mode={mode} />
        </Route>
        
      </Switch>
      </Router>
    </>
  );
}

export default App;
