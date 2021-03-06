import React, { Component } from "react";
import firebase from "../components/FirebaseConfig";
import Hero from "../components/Hero";
import Title from "../components/Title";
import afterspa from "../images/afterspa.jpg";
import Reservation from "../components/Reservation";

class Booking extends Component {
  state = {
    bookings: [],
  };

  componentDidMount() {
    const db = firebase.firestore();

    db.collection("booking")
      // .where("uid", "==", "uid")  In med query om current user
      .get()
      .then((snapshot) => {
        const bookings = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          bookings.push(data);
        });
        this.setState({ bookings: bookings });
      })
      .catch((error) => console.log(error));

    // onClickFirebase() {
    //   const db = firebase.firestore();
    //   const docRef = db.collection("booking").doc("7");

    //   //läser data from firebase
    //   docRef.get().then((booking) => {
    //     if (booking.exists) {
    //       console.log("document data: ", booking.data());
    //     } else {
    //       console.log("error");
    //     }
    //   });
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
            style={{ width: "400px", marginLeft: "0px" }}
            alt="some spa-image"
          />
          <div className="booking-border">
            <h2>Booking history</h2>
            <p style={{ fontWeight: "800" }}>
              {" "}
              List and details of your bookings
            </p>
            <ul className="orderlist">
              {this.state.bookings &&
                this.state.bookings.map((booking) => (
                  <li key={booking.id}>
                    <span className="orderlistheader">{booking.name}</span>
                    {booking.description}
                    <span className="orderlistprice">
                      Price: ${booking.price}
                    </span>

                    {}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
