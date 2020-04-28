import React, { Component } from "react";
import "../style/_main.scss";
class LoginForm extends Component {
  constructor(props) {
    super(props);

    //initialisera state
    this.state = {
      username: undefined,
      email: undefined,
      password: undefined,
    };
  }

  handleOnChangeUsername(e) {
    this.setState({ username: e.target.value });
  }
  handleOnChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleOnChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleOnChangeMobile(e) {
    this.setState({ mobile: e.target.value });
  }

  //skapa en metod
  handleOnSubmit(e) {
    e.preventDefault();

    //this.setState({})
  }
  // uppdatera state med setState()
  //Skicka data till annan sida med detaljer om bokning
  render() {
    return (
      <div>
        <div className="bookingcontainer">
          <form className="bookingformBig" onSubmit={this.handleOnSubmit}>
            <div>
              <h3>Enter your logindetails</h3>
            </div>
            <label>Username:</label>
            <input
              className="form-control big"
              type={"text"}
              placeholder={"Enter your username"}
              onChange={this.handleOnChangeName}
            ></input>
            <label>Email:</label>
            <input
              className="form-control"
              type={"text"}
              placeholder={"Enter your e-mailadress"}
              onChange={this.handleOnChangeTreatment}
            ></input>
            <label>Password:</label>
            <input
              className="form-control"
              type={"text"}
              placeholder={"Type your fucking password"}
              onChange={this.handleOnChangeTime}
            ></input>
            <label>Your number:</label>
            <input
              className="form-control"
              type={"number"}
              placeholder={"Your phone number"}
              onChange={this.handleOnChangeMobile}
            ></input>
            <button
              className="btn-booking"
              type={"submit"}
              onSubmit={this.handleOnSubmit}
            >
              Confirm
            </button>
          </form>
          <div> {this.state.name}</div>
          <div> {this.state.appointmentTime}</div>
          <div> {this.state.mobile}</div>
        </div>
      </div>
    );
  }
}
export default LoginForm;
