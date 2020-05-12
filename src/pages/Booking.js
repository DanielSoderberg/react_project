import React from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
import afterspa from "../images/afterspa.jpg";
import "../style/_main.scss";
const Booking = () => {
  //State
  return (
    <section>
      <div>
        <Hero hero="extraHero2" />
      </div>
      <Title title="Your bookings" />
      <div className="booking-wrapper">
        <img src={afterspa} style={{ width: "500px" }} />
        <div className="booking-container">
          <h2>Your selected treatment</h2>
          <div>
            <ul className="booking-details">
              <li style={{ fontWeight: "bold" }}>31 January 2019</li>
              <li>Title of treatment</li>
              <li>Name of booking</li>
              <li>Date and time</li>
              <li>Extras etcetera</li>
              <br></br>
              <li style={{ fontWeight: "bold" }}>4 Mars 2020</li>
              <li>Title of treatment</li>
              <li>Name of booking</li>
              <li>Date and time</li>
              <li>Extras etcetera</li>
              <br></br>
              <li style={{ fontWeight: "bold" }}>2 May 2020</li>
              <li>Title of treatment</li>
              <li>Name of booking</li>
              <li>Date and time</li>
              <li>Extras etcetera</li>
              <br></br>
              <li style={{ fontWeight: "bold" }}>Hårdkodade</li>
              <li>Ska uppdateras</li>
              <li>Namn och bla bla</li>
              <li>Datum och tid</li>
              <li>Extras etcetera</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
