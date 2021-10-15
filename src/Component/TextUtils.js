import React, { useState } from "react";

export default function TextUtils(props) {
  const [text, setText] = useState('');
  const HandleOnClick = () => {
    let newUppperText = text.toUpperCase();
    setText(newUppperText);
    props.showAlert("Converted to Uppercase", "success")
  };
  const HandleOnChange = (eve) => {
    setText(eve.target.value);
  };

  const HandleOnLowecase = () => {
    let newLowerText = text.toLowerCase();
    setText(newLowerText);
    props.showAlert("Converted to lowercase", "success")

  };
  const HandleOnClear = () => {
    let newLowerText = "";
    setText(newLowerText);
    props.showAlert("Text cleared", "success")

  };
  const HandleOnCopy = () => {
    let newtext = document.getElementById("text-area");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Copied to Clipboard", "success")

  };
  const HandleOnExtraSpace = () => {
    let newSpacetext = text.split(/[ ]+/);
    setText(newSpacetext.join(" "));
    props.showAlert("Removed extra spaces" , "success");

  };

  return (
    <>
      <div className="container mt-5"  style= {{color: props.mode==='dark' ? 'white' : 'black'}}>
        <div className="mb-3">
          <h2> {props.title}</h2>
          <textarea
            className="form-control mt-4"
            style= {{backgroundColor: props.mode==='dark'?'#0B0B45' : 'white' ,
             color : props.mode==='dark' ? 'white' : 'black'}}
            id="text-area"
            value={text}
            onChange={HandleOnChange}
            rows="9"
            placeholder="Enter your text here"
          />
          <button
            type="button"
            onClick={HandleOnClick}
            className="btn btn-primary my-4"
          >
            Convert to Uppercase
          </button>

          <button
            type="button"
            onClick={HandleOnLowecase}
            className="btn btn-danger my-4 mx-3"
          >
            Convert to Lowecase
          </button>
          <button
            type="button"
            onClick={HandleOnClear}
            className="btn btn-secondary my-4"
          >
            Clear Text
          </button>
          <button
            type="button"
            onClick={HandleOnCopy}
            className="btn btn-info mx-4"
          >
            Copy Text
          </button>
          <button
            type="button"
            onClick={HandleOnExtraSpace}
            className="btn btn-warning"
          >
            Remove Extra Space
          </button>
        </div>
      </div>
      <div className="container"  style= {{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Text preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
