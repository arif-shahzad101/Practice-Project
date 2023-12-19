import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied ", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  const handleOnChange = (event) => {
    // console.log("onchange  ");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div
          className="container mb-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            placeholder="Enter Text Here"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#343c43" : "white",
              color: props.mode === "dark" ? "white" : "black",
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
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.trim().length === 0
            ? "No text entered"
            : `${text.trim().split(/\s+/).length} words and ${
                text.length
              } characters`}
        </p>

        <h1>Preview</h1>
        <p>
          {text.length > 0
            ? text
            : "Enter something in above textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
