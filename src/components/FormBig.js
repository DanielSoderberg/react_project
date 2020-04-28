import React, { Component } from "react";
import Hero from "./Hero";
import Formular from "./Formular";
import "../style/_main.scss";
class FormBig extends Component {
  constructor(props) {
    super(props);

    //initialisera state
    this.state = {
      name: undefined,
      appointmentTime: undefined,
      mobile: undefined,
      message: undefined,
    };
  }

  handleOnChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleOnChangeTreatment(e) {
    this.setState({ name: e.target.value });
  }
  handleOnChangeTime(e) {
    this.setState({ appointmentTime: e.target.value });
  }
  handleOnChangeMobile(e) {
    this.setState({ mobile: e.target.value });
  }
  handleOnChangeMessage(e) {
    this.setState({ message: e.target.value });
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
              <h3>Make your reservation</h3>
              <p>Choose one treatment today</p>
            </div>
            <label>Your name:</label>
            <input
              className="form-control big"
              type={"text"}
              placeholder={"Your name"}
              onChange={this.handleOnChangeName}
            ></input>
            <label>Select Treatment:</label>
            <input
              className="form-control big"
              type={"text"}
              placeholder={"Type of Treatment"}
              onChange={this.handleOnChangeTreatment}
            ></input>
            <label>Preferred time:</label>
            <input
              className="form-control"
              type={"text"}
              placeholder={"Time of booking"}
              onChange={this.handleOnChangeTime}
            ></input>
            <label>Your number:</label>
            <input
              className="form-control"
              type={"numbers"}
              placeholder={"Telephone number"}
              onChange={this.handleOnChangeMobile}
            ></input>
            <label>Leave a message:</label>
            <textarea
              className="form-control"
              type={"text"}
              placeholder={"Leave a message"}
              value={this.state.value}
              onChange={this.handleOnChangeMessage}
            ></textarea>
            <texarea />
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
export default FormBig;
