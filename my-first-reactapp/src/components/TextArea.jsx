import React, { useState } from "react";

export default function TextArea() {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick=()=>{
    setText("");
  }
  const handleCopyClick=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }
  const handleOnChange = () => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div className="container pt-3">
      <h1>Enter Your Text Below</h1>
      <div className="mb-3 pt-2">
        <textarea
          className="form-control"
          id="myBox"
          rows="9"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary mt-2 mx-1" onClick={handleUpClick}>
          Upper Case The Text
        </button>
        <button className="btn btn-primary mt-2 mx-1" onClick={handleLowClick}>
          Lower Case The Text
        </button>
        <button className="btn btn-primary mt-2 mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mt-2 mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
      <div className="mb-3 pt-2">
        <h3>Your Text Summary</h3>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to Read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
