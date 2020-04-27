import React, { Component } from "react";
import Title from "./Title";
import "../style/_main.scss";
import Hero from "../components/Hero";
import spalights from "../images/spalights.jpg";
import whitetowel from "../images/whitetowel.jpg";
import whitecandles from "../images/whitecandles.jpg";
import candles from "../images/candles.jpg";
import facetreatment from "../images/facetreatment.jpg";
import bathtub from "../images/bathtub.jpg";

class Showpage extends Component {
  state = {
    treatments: [
      {
        img: <spalights />,
        title: "Spa",
        info:
          "Free drinks for all, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        img: <whitetowel />,
        title: "Fresh towels",
        info:
          "Towels is relaxing, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        img: <candles />,
        title: "Relaxing time",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        img: <facetreatment />,
        title: "Hot bath",
        info:
          "Relaxing hot spa ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        img: <whitecandles />,
        title: "Stay over",
        info:
          "Hotelservice spa ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        img: <bathtub />,
        title: "Coffee",
        info:
          "Café whith ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
    ],
  };
  render() {
    return (
      <div>
        <section className="about">
          <Title title="The treatments" />
          <div className="services-center">
            {this.state.treatments.map((item) => {
              return (
                <article key={`item-${item.title}`} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default Showpage;
