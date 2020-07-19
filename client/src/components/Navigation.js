import React, { Component, Fragment } from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <section classNameName="main__navigation">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link exact to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">
                Prodducts
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Navigation;
