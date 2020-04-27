import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import candles from "../images/candles.jpg";
import Card from "./Card";
import "../style/_main.scss";

const Booking = () => {
  //State
  return (
    <div>
      <div className="">
        <img src={candles} style={{ width: "500px" }}></img>
      </div>
      <div>
        <h3>My bookings</h3>
        <p>List and details of my bookings</p>
        {localStorage.getItem("valueFromForm")}
      </div>
    </div>
  );
};

export default Booking;
