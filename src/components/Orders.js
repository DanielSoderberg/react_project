import React, { Component } from "react";
import firebase from "../components/FirebaseConfig";



class Orders extends Component {
  state = {
    bookings: [],
  };

  componentDidMount() {
    const db = firebase.firestore();

    db.collection("booking")
      //.where("User UID", "===", true) OBS! Kolla userId/Current user
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


  }

  render() {
    return (
      <div className="bookingcontainer">
     
            <h2>Booking history</h2>
            <p style={{ fontWeight: "800" }}>
              {" "}
              List and details of your bookings
            </p>
            <ul className="orderlist">
              {this.state.bookings &&
                this.state.bananas.map((booking) => (
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
        
       
    );
  }
}

export default Orders;
