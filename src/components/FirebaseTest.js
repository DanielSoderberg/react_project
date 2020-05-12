import React, { Component } from "react";
import firebase from "./FirebaseConfig";
class FirebaseTest extends Component {
  onClickFirebase() {
    const docRef = firebase.firestore().collection("booking").doc("info");
    const docRef2 = firebase.firestore().collection("booking").doc("info2");
    docRef.get().then((booking) => {
      if (booking.exists) {
        console.log("document data: ", booking.data());
      } else {
        console.log("error");
      }
    });

    docRef.set({
      item: "Testet gubbe",
      price: 2300,
    });
    docRef2.set({
      item: "Test Ny",
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
export default FirebaseTest;
