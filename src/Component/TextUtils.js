import React, { useState } from "react";

export default function TextUtils(props) {
  const [text, setText] = useState("");
  const HandleOnClick = () => {
    let newUppperText = text.toUpperCase();
    setText(newUppperText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const HandleOnChange = (eve) => {
    setText(eve.target.value);
  };

  const HandleOnLowecase = () => {
    let newLowerText = text.toLowerCase();
    setText(newLowerText);
    props.showAlert("Converted to lowercase", "success");
  };
  const HandleOnClear = () => {
    let newLowerText = "";
    setText(newLowerText);
    props.showAlert("Text cleared", "success");
  };
  const HandleOnCopy = () => {
    let newtext = document.getElementById("text-area");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };
  const HandleOnExtraSpace = () => {
    let newSpacetext = text.split(/[ ]+/);
    setText(newSpacetext.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };

  return (
    <>
      <div
        className="container mt-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1> {props.title}</h1>
          <textarea
            className="form-control mt-4 mb-3"
            style={{
              backgroundColor: props.mode === "dark" ? "#0B0B45" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="text-area"
            value={text}
            onChange={HandleOnChange}
            rows="9"
            placeholder="Enter your text here"
          />
          <button
            type="button"
            onClick={HandleOnClick}
            className="btn btn-primary my-1 mx-2"
            disabled={text.length===0} 
          >
            Convert to Uppercase
          </button>

          <button
            type="button"
            onClick={HandleOnLowecase}
            className="btn btn-danger my-1 mx-2"
            disabled={text.length===0} 
          >
            Convert to Lowecase
          </button>
          <button
            type="button"
            onClick={HandleOnClear}
            className="btn btn-secondary my-1 mx-2"
            disabled={text.length===0} 
          >
            Clear Text
          </button>
          <button
            type="button"
            onClick={HandleOnCopy}
            className="btn btn-info my-1 mx-2"
            disabled={text.length===0} 
          >
            Copy Text
          </button>
          <button
            type="button"
            onClick={HandleOnExtraSpace}
            className="btn btn-warning my-1 mx-2"
            disabled={text.length===0} 
          >
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((t) => t !== "").length} words and{" "}
          {text.length} characters
        </p>
        <h2>Text preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
