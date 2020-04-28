import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import Logo from "../images/logo2NY.png";
import "../style/_main.scss";

class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} style={{ height: "50px" }} alt="Daniels SPA" />
          </Link>
        </div>
        <div className="nav-center">
          <div className="nav-header">
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Treatments">Treatments</Link>
            </li>
            <li>
              <Link to="/Booking">Your Bookings</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
