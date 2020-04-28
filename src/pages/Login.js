import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import "../style/_main.scss";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Hello, this is a login page</h1>
        <div>
          <LoginForm />
        </div>
      </div>
    );
  }
}
export default Login;
