import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let textCase = text.toUpperCase();
    setText(textCase);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let textCase = text.toLowerCase();
    setText(textCase);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleToClear = () => {
    let textCase = "";
    setText(textCase);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };

  return (
    <div
      className="container py-4"
      style={{ color: props.modes === "dark" ? "white" : "dark" }}
    >
      <div className="row mb-4">
        <div className="col">
          <h4>{props.heading}</h4>
          <div className="mt-3">
            <textarea
              className="form-control mb-3"
              id="myBox"
              rows="8"
              value={text}
              onChange={handleOnChange}
            ></textarea>
            <button className="btn btn-primary me-3" onClick={handleUpClick}>
              Convert to Uppercase
            </button>
            <button className="btn btn-primary me-3" onClick={handleLoClick}>
              Convert to Lowecase
            </button>
            <button className="btn btn-primary me-3" onClick={handleToClear}>
              Clear Text
            </button>
            <button className="btn btn-primary me-3" onClick={handleCopy}>
              Copy Text
            </button>
            <button className="btn btn-primary me-3" onClick={handleExtraSpace}>
              Remove Extra Space
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6>Word count summary</h6>
          <p>
            <strong>{text.split(" ").length} </strong>
            words and <strong>{text.length}</strong> characters
          </p>
          <p>
            <strong>{0.008 * text.split(" ").length}</strong> minutes in read
          </p>
          <h6>Preview</h6>
          <p>{text.length > 0 ? text : "Enter some text in text area"}</p>
        </div>
      </div>
    </div>
  );
}
