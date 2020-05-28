import React from "react";
import Title from "../components/Title";
import "../style/_main.scss";
import Hero from "../components/Hero";
import spalights from "../images/spalights.jpg";
import whitetowel from "../images/whitetowel.jpg";
import candles from "../images/candles.jpg";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import faker from "faker";
import Form from "../components/Form";

const Treatments = () => {
  return (
    <section className="treatments">
      <div>
        <Hero hero="extraHero">
          <div>
            <Form />
          </div>
        </Hero>
      </div>

      <div className="service-wrapper">
        <div>
          <Title title="Our Treatments" />
        </div>
        <div className="container-treatments">
          <Link to="/SingleTreatment" style={{ textDecoration: "none" }}>
            <div className="img-container">
              <img src={whitetowel} alt="Different treatments" />
              <div className="price-top">
                <h6>$100</h6>
                <p>Exclusive</p>
              </div>
            </div>
            <div className="treatments-header">Sensational Spa</div>
          </Link>
          <Link to="/SingleTreatment" style={{ textDecoration: "none" }}>
            <div className="img-container">
              <img src={spalights} alt="Different treatments" />
              <div className="price-top">
                <h6>$199</h6>
                <p>Romantic</p>
              </div>
            </div>
            <div className="treatments-header">Relaxing weekend</div>
          </Link>

          <Link to="/SingleTreatment" style={{ textDecoration: "none" }}>
            <div className="img-container">
              <img src={candles} alt="Special treatment" />
              <div className="price-top">
                <h6>$699</h6>
                <p>Exclusive</p>
              </div>
            </div>
            <div className="treatments-header">Special Treatment</div>
          </Link>
        </div>
      </div>
      <div>
        <Title title="A word from our visitors" />
      </div>
      <div className="infotext-big">
        Enjoy first class spa treatments performed by professional therapists.
        Here you will find a quiet and a total experience for body and mind.
        Here you can find a couple of comments from some of our erlier visitors.
      </div>

      <div className="container-four">
        <Card image={faker.image.avatar()} />
        <Card image={faker.image.avatar()} />
        <Card image={faker.image.avatar()} />
        <Card image={faker.image.avatar()} />
        <Card image={faker.image.avatar()} />
        <Card image={faker.image.avatar()} />
        <Card image={faker.image.avatar()} />
        <Card image={faker.image.avatar()} />
      </div>
    </section>
  );
};

export default Treatments;
