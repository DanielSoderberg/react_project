import React, { Component } from "react";
import Title from "./Title";
import "../style/_main.scss";
import {
  FaSpa,
  FaHotTub,
  FaCannabis,
  FaCocktail,
  FaBed,
  FaCoffee,
} from "react-icons/fa";

class About extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Free drinks for all, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaCannabis />,
        title: "Take a joint",
        info:
          "Cannabis is relaxing, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaSpa />,
        title: "Spa and relax",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaHotTub />,
        title: "Hot bath",
        info:
          "Relaxing hot spa ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaBed />,
        title: "Stay over",
        info:
          "Hotelservice spa ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaCoffee />,
        title: "Coffee",
        info:
          "Café whith ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
    ],
  };
  render() {
    return (
      <section className="about">
        <div>
          <Title title="About us" />
        </div>

        <div className="about-container">
          {this.state.services.map((item) => {
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
    );
  }
}

export default About;
