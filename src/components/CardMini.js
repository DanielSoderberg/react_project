import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CardMini = (props) => {
  return (
    <div className={"container"}>
      <div className={"card"} style={{ width: "18rem", flex: 1 }}>
        <img
          src={props.image}
          className={"card-img-top"}
          alt={"Some random treatment"}
        />
        <div className={"card-body"}>
          Special Treatment
          <h5 className={"card-title"}></h5>
          <p className={"card-text"}>Hot stone massage</p>
        </div>
        <div className={"card-footer"}>
          <small className="text-muted">120 minutes</small>
        </div>
        <button className={"btn-card"}>Book now</button>
      </div>
    </div>
  );
};

export default CardMini;
