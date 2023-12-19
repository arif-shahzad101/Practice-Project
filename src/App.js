import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

const App = () => {
  const [mode, setMode] = useState("light"); //whether dark or light
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    // console.log("Type:", type); // Add this line for debugging
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#093678";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="Text Converter" mode={mode} togglemode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        <About />
      </div>
    </>
  );
};

export default App;
