import React, { Component } from "react";
import firebase from "./FirebaseConfig";

class FirebaseTest extends Component {
  onClickFirebase() {
    const db = firebase.firestore();
    const docRef = db.collection("booking").doc("info");
    //alt
    const docRef2 = firebase.firestore().collection("booking").doc("info2");
    //läser data from firebase
    docRef.get().then((booking) => {
      if (booking.exists) {
        console.log("document data: ", booking.data());
      } else {
        console.log("error");
      }
    });

    // skriva data i firebase
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
