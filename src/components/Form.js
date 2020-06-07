import React, { Component } from "react";
import "../style/_main.scss";
class Form extends Component {
  constructor(props) {
    super(props);

    //initiallera state
    this.state = {
      name: undefined,
      appointmentTime: undefined,
      mobile: undefined,
    };
  }

  //spara state i localStorage
  // this and arrow function

  handleOnChange = (e) => {
    // console.log(e.target.value)

    this.setState({ [e.target.name]: e.target.value });

    
    // name properties värdena måste vara samma state
  };

   handleOnChangeName = (e) => {
        this.setState({ name: e.target.value });
 
    }

    handleOnChangeTime = (e) => {
        this.setState({ appointmentTime: e.target.value });
    }


    handleOnChangeMobile = (e) => {
        this.setState({ mobile: e.target.value });
    }
  //skapa en metod
  handleOnSubmit(e) {
    e.preventDefault();
    this.setState({name:e.target.elements.Name.value,
          appointmentTime: e.target.elements.Time.value
 }); 
 console.log(e.target.elements.Name.value);
    this.setState({})
  }
  // uppdatera state med setState()

  //form kommer att anropa metoden med hjälp av event
  render() {
    return (
      <div>
        <div>
          <form className="bookingform" onSubmit={this.handleOnSubmit}>
            <div>
              <h3>Make your reservation</h3>
              <p style={{ fontWeight: "600" }}>Choose one treatment today!</p>
            </div>
            <label style={{ fontWeight: "600" }}>Your name:</label>
            <input
              className="form-control"
              type={"text"}
              placeholder={"Your name"}
              onChange={this.handleOnChangeName}
            ></input>
            <label style={{ fontWeight: "600" }}>Select Treatment:</label>
            <input
              className="form-control"
              type={"text"}
              placeholder={"Type of Treatment"}
              onChange={this.handleOnChangeTreatment}
            ></input>
            <label style={{ fontWeight: "600" }}>Preferred time:</label>
            <input
              className="form-control"
              type={"text"}
              placeholder={"Time of booking"}
              onChange={this.handleOnChangeTime}
            ></input>
            <label style={{ fontWeight: "600" }}>Your number:</label>
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
export default Form;
