import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    // console.log("onchange  ");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#6c757d" : "white",
            }}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>

          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={handleClearClick}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
