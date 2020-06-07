import React, { Component } from "react";
import firebase from "./FirebaseConfig";

class Reservation extends Component {
  /*   onClickFirebase() {
    const docRef = firebase
      .firestore()
      .collection("booking")
      .doc(this.props.docId.toString());

    docRef.get({
      // title: this.props.title,
      description: this.props.description,
      price: this.props.price,
    });
  } */

  render() {
    return (
      <div>
        <ul>
          {this.state.bananas &&
            this.state.bookings.map((booking) => (
              <li key={booking.id}>
                {booking.title} {}
                {booking.price},{booking.description},
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
export default Reservation;

/* class Booking extends Component {
  onClickFirebase() {
    const docRef = firebase.firestore().collection("message").doc("info");
    const docRef2 = firebase.firestore().collection("booking").doc("info2");
    docRef.get().then((booking) => {
      if (booking.exists) {
        console.log("document data: ", booking.data());
      } else {
        console.log("error");
      }
    });

    //SKRIV data till Firebase
    docRef.set({
      item: "Test juni. Bara för att se om det funkar",
      price: 2300,
    });
    docRef2.set({
      item: "Test igen mannen!",
      price: 23300,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.onClickFirebase.bind(this)}>
          Hämta Firestore Info
        </button>
      </div>
    );
  }
}
export default Booking;
 */
