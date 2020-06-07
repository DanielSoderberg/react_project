import React, { Component } from "react";
import axios from "axios";
import Logo from "../../images/logo2NY.png";
import { Redirect } from "react-router-dom";

class AdminLogin extends Component {
  state = {
    condition: true,
    user: "",
    redirect: null,
    errorMessage: "",
  };


  onClickRegister() {
    this.setState({ condition: false });
  }

  onClickLogin() {
    this.setState({ condition: true });
  }
  onSubmitLogin(e) {
    e.preventDefault();
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: e.target.elements.email.value,
        password: e.target.elements.password.value,
        

      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        this.setState({ redirect: "/AdminForm" });
        //uppdatera state med response , localhost
        //this.props.userInfo(response.data.jwt);
        //this.props.userCredential(response.data.user, response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("Something went wrong:", error);
        this.setState({ errorMessage: error.message });
      });
  }
  
  

  onSubmitRegister(e) {
    e.preventDefault();
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: e.target.elements.username.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        //localhost eller state med response data
        this.props.userCredential(response.data.user, response.data.jwt);

      })
      .catch((error) => {
        // Handle error.
      console.log("Something went wrong with registration:", error);
      this.setState({ errorMessage: error.message });
      });
  }

  render() {
    //Redirect auth user - or something
  if (this.state.redirect) {
  return <Redirect to={this.state.redirect} />
  }
    return (
      <div>
        {this.state.condition && (
          <div className="bookingcontainer">
         
            <h3>Login</h3>
            <form
                   onSubmit={this.onSubmitLogin.bind(this)}
              className="bookingformBig"
            >
            {this.state.errorMessage &&
          <h5 className="errorMessage">{this.state.errorMessage}</h5>}
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder={"Your email"}
              />
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder={"Password"}
              />
              <button className="btn-booking">Login</button>
            </form>
          </div>
        )}

        {!this.state.condition && (
          <div className="bookingcontainer">
            <h3>Register</h3>
            <form
              className="bookingformBig"
              onSubmit={this.onSubmitRegister.bind(this)}
            >
            {this.state.errorMessage &&
          <h5 className="errorMessage">{this.state.errorMessage}</h5>}
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Username"
              />
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />

              <button className="btn-booking">Register</button>
            </form>
            <div>
              <img className="biglogo" src={Logo} alt="Daniels SPA" />
            </div>
          </div>
        )}

        {/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
        <div className="bookingcontainer">
          <button className="btn-login" onClick={this.onClickLogin.bind(this)}>
            Login
          </button>
          <button
            className="btn-login"
            onClick={this.onClickRegister.bind(this)}
          >
            Register
          </button>
        </div>
         
      </div>
    );
  }
}

export default AdminLogin;
