import React from "react";

export default function About(props) {
  let bodystyle = {
    border: props.mode === "dark" ? " 1px solid white" : "black",
  };

  let itemStyle = {
    backgroundColor: props.mode === "dark" ? "#0B0B45" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };
  let accordionBtn = {
    backgroundColor: props.mode === "dark" ? "#0B0B45" : "white",
    color: props.mode === "dark" ? "khaki" : "black",
    border: props.mode === "dark" ? " 1px solid white" : "black",
  };

  let mainBtn = {
    backgroundColor: props.mode === "dark" ? "#17BFC2" : "#C11B17",
    border: props.mode === "dark" ? "none" : "none",
  };
let headingTxt= {
    color: props.mode === "dark" ? "lightgreen" : "black"
}
  return (
    <>
      <div className="container">
        <h2 className="my-5" style={headingTxt}>
          About-us
        </h2>
        <div className="accordion mt-5">
          <div className="accordion-item" style={itemStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                style={accordionBtn}
              >
                Paragraph 1
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body" style={bodystyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={itemStyle}>
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                style={accordionBtn}
              >
                Paragraph 2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body" style={bodystyle}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={itemStyle}>
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
                style={accordionBtn}
              >
                Paragraph 3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body" style={bodystyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-danger my-5" style={mainBtn}>
          Click here to preview
        </button>
      </div>
    </>
  );
}
