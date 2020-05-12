import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/_main.scss";

const Card = (props) => {
  return (
    <div className={"container-four"}>
      <div className={"card"} style={{ width: "14rem", flex: 1 }}>
        <img
          src={props.image}
          className={"card-img-top"}
          alt={"Picture of a ordinary person"}
        />
        <div className={"card-body"}>
          "Best thing ever!"
          <h3 className={"card-title"} style={{ fontWeight: "800" }}></h3>
          <p className={"card-text"}>
            "Im very happy that tried the special treatments in the spa. The
            best thing ive ever done! I highly recommend it."
          </p>
        </div>
        <div className={"card-footer"}>
          <small className="text-muted">Wednesday 3:21 PM</small>
        </div>
        <button className={"btn-main"}>Read More</button>
      </div>
    </div>
  );
};

export default Card;
