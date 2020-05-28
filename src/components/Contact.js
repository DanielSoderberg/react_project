import React, { Component } from "react";
import firebase from "../components/FirebaseConfig";

class Contact extends Component {
  //TEST state formulär
  //initialisera state
  // state = {
  //   contactname: undefined,
  //   contactmail: undefined,
  //   contactmessage: undefined,
  // };

  // handleOnChangeContactName(e) {
  //   this.setState({ contactname: e.target.value });
  // }
  // handleOnChangeContactMail(e) {
  //   this.setState({ contactmail: e.target.value });
  // }

  // handleOnChangeContactMessage(e) {
  //   this.setState({ contactmessage: e.target.value });
  // }

  onSubmitForm(e) {
    console.log("Thank you for your mail");
    e.preventDefault();
    firebase.firestore();

    const db = firebase.firestore();
    //Userid från currentuser i databasen
    const userId = firebase.auth().currentUser.userId;
    //if (firebase.auth().currentUser.userId) {
    const docRef = db
      .collection("contactFormData2")
      .doc("contacts")
      .collection("contactmessages");

    //else meddelande: Skapa att konto för att kunna skicka meddelande
    // doc("trash message")
    docRef.add({
      name: e.target.elements.contactname.value,
      email: e.target.elements.contactemail.value,
      message: e.target.elements.contactmessage.value,
    });
  }

  render() {
    return (
      <div className="bookingcontainer">
        <h3>Contact us</h3>
        <h4></h4>

        <form onSubmit={this.onSubmitForm.bind(this)}>
          <label>Your name:</label>
          <input
            className="form-control"
            type="text"
            name="contactname"
            placeholder={"Your name"}
          />
          <label>Your email:</label>
          <input
            className="form-control"
            type="text"
            name="contactemail"
            placeholder={"Your email"}
          />
          <label>Message:</label>
          <textarea
            className="form-control"
            type="text"
            rows="5"
            cols="50"
            name="contactmessage"
            placeholder="Message"
          />
          <button
            className="btn-booking"
            /*             onSubmit={this.onSubmitForm.bind(this)}
             */
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}
export default Contact;
