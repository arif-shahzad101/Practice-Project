import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light"); //whether dark or light
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#6c757d";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <BrowserRouter>
      <>
        <Navbar title="Text Converter" mode={mode} togglemode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm heading="Enter your text to analyse" mode={mode} />
              }
            />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
