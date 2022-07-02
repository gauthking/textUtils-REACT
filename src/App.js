// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 4000);
  }

  const toggleDarkLightModes = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#4c5a67';
      showAlert('Dark Mode has been enabled!', 'DARK MODE')
        ;
      document.title = 'TextUtils-Dark';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled!', 'LIGHT MODE');
      document.title = 'TextUtils-Light';
    }
  }

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<><Navbar toggleModes={toggleDarkLightModes} mode={mode} /><Alert alert={alert} /><div className="container my-3">
            <Textform textalert={showAlert} heading="Enter the text to Analyze" textcolor={mode} />
          </div></>} />
        </Routes> */}

      <Navbar toggleModes={toggleDarkLightModes} mode={mode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform textalert={showAlert} heading="Enter the text to Analyze" textcolor={mode} />
      </div>




      {/* // </Router > */}
    </>

  );
}

export default App;
