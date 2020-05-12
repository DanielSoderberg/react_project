import React, { Component } from "react";
import ReactDOM from "react-dom";
import { render } from "node-sass";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  }

  handlelogOut() {
    localStorage.clear();
    window.location.reload(false);

    render();

    return (
      <div>
        <button onClick={this.handlelogOut.bind(this)}>Logout</button>
      </div>
    );
  }
}
export default Logout;
