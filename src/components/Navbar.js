import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.modes} navbar-${props.modes} shadow-sm`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
              <Link className="nav-link" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/textform">
                {props.txtForm}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                {props.contact}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              type="button"
              className="btn btn-primary rounded-circle me-3"
            ></button>

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
  txtForm: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
};

Navbar.defaultProps = {
  title: "promoCodes",
  home: "Home",
  txtForm: "Text form",
  about: "About",
  contact: "Connect",
};
