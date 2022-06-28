import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.modes} navbar-${props.modes} shadow-sm`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.contact}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div
              className={`form-check form-switch text-${
                props.modes === "light" ? "dark" : "light"
              } `}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="themeChange"
                onClick={props.toggleMode}
              />
              <label className="form-check-label " htmlFor="themeChange">
                Change mode
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
// below code reference:  https://reactjs.org/docs/typechecking-with-proptypes.html
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
};

Navbar.defaultProps = {
  title: "promoCodes",
  home: "Home",
  about: "About",
  contact: "Connect",
};
