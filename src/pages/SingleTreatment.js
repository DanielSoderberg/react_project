import React from "react";
import candles from "../images/candles.jpg";
import Title from "../components/Title";
import spalights from "../images/spalights.jpg";
import whitetowel from "../images/whitetowel.jpg";
import whitecandles from "../images/whitecandles.jpg";
import bathtub from "../images/bathtub.jpg";
import CardMini from "../components/CardMini";
import FormBig from "../components/FormBig";

const SingleTreatment = () => {
  return (
    <section className="singletreatment">
      <div>
        <Title title="Good choice, this is a popular treatment" />
      </div>
      <div className="treatment-container">
        <div>
          <img src={candles} style={{ width: "500px" }} />
        </div>
        <div>
          <p className="treatment-info">
            <h2>Your best Treatment</h2>
            <h5>Package includes</h5>
            Breakfast buffet in Linnea Art Restaurant 8 am – 9.30 am – Entrence
            to our indoor & outdoor pool area, relaxation area, saunas & gym. –
            Facial or body treatment á 30 or 50 minutes. – 1 glass of juice in
            the Pool bar. Towel, robe & slippers are included. – Training
            sessions: don´t forget to prebook before arrival.
          </p>

          <p className="treatment-info">
            <h5>Lunch buffet</h5>
            Lunch buffet in Linnea Art Restaurant. Monday-Thursday, treatment 30
            minutes 995 SEK per person Monday-Thursday, treatment 50 minutes
            1295 SEK per person.
          </p>

          <p className="treatment-info">
            <h5>Extra specials</h5>
            You can allways upgrade your package. We deliver everything for your
            total satisfaction.
          </p>
        </div>
        <div className="treatmentimages">
          <img src={spalights} style={{ width: "140px" }} />
          <img src={candles} style={{ width: "140px" }} />
          <img src={whitecandles} style={{ width: "140px" }} />
        </div>
      </div>
      <div>
        <Title title="And some more alternatives" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <CardMini image={whitetowel} />
          </div>
          <div className="col">
            <CardMini image={spalights} />
          </div>
          <div className="col">
            <CardMini image={bathtub} />
          </div>
        </div>
      </div>
      <div>
        <FormBig />
      </div>
    </section>
  );
};

export default SingleTreatment;
