import React, { Component } from "react";
import firebase from "../components/FirebaseConfig";
import Hero from "../components/Hero";
import Title from "../components/Title";
import afterspa from "../images/afterspa.jpg";

class Booking extends Component {
  onClickFirebase() {
    const docRef = firebase.firestore().collection("booking").doc("2");
    const docRef2 = firebase.firestore().collection("booking").doc("4");
    const docRef3 = firebase.firestore().collection("booking").doc("6");
    const docRef4 = firebase.firestore().collection("message").doc("info2");
    docRef.get().then((booking) => {
      if (booking.exists) {
        console.log("document data: ", booking.data());
      } else {
        console.log("error");
      }
    });

    //SKRIV data till Firebase
    /*  docRef.set({
      name: this.props.title,
      description: this.props.description,
      price: this.props.price,
    }); */
    docRef2.set({
      item: "Test Ny",
      price: 23300,
    });
  }

  render() {
    return (
      <div>
        <div>
          <Hero hero="extraHero2" />
        </div>

        <Title title="Your bookings" />

        <div className="booking-wrapper">
          <img
            src={afterspa}
            style={{ width: "500px", marginLeft: "0px" }}
            alt="some spa-image"
          />
          <div className="booking-border">
            <h2 style={{ alignItem: "right" }}>Booking history</h2>
            <p>List and details of your bookings</p>

            <ul>
              <li style={{ fontWeight: "800" }}>{document.data}</li>
              <li> {this.props.description}</li>
              <li> {this.props.price}</li>
              <li>
                {" "}
                Ser dataobjekt i konsollen men kan inte fixa sättet för att
                lista det(Map eller?)
              </li>
              <li>
                document data: "Saturday Luxury", description: "A fantastic day
                at the spa. Breakfast buffet. Entr…, relaxation area, saunas &
                gym. And treatments.", price: 230
              </li>
            </ul>

            <div>
              <button
                className="btn-booking"
                onClick={this.onClickFirebase.bind(this)}
              >
                {" "}
                Get my bookings
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Booking;
