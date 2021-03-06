import React, { useState } from "react";

export default function About(props) {
  const [themeMode, setThemeMode] = useState({
    backgroundColor: "white",
    color: "black",
    borderColor: "black",
  });
  const [btnText, setBtnText] = useState("Enable dark mode");
  const ChangeThemeMode = () => {
    if (themeMode.color === "white") {
      setThemeMode({
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
      });
      setBtnText("Enable dark mode");
    } else {
      setThemeMode({
        backgroundColor: "black",
        color: "white",
        borderColor: "white",
      });
      setBtnText("Enable light mode");
    }
  };

  return (
    <div className="container mt-4" style={themeMode}>
      <div className="row">
        <div className="col">
          <h2 className="py-3">About us</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={themeMode}
                >
                  <strong> Accordion Item #1</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={themeMode}>
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={themeMode}
                >
                  <strong> Accordion Item #2</strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={themeMode}>
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={themeMode}
                >
                  <strong>Accordion Item #3</strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={themeMode}>
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            type="button"
            className="btn btn-dark my-3"
            onClick={ChangeThemeMode}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
