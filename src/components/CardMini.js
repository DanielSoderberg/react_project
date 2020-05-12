import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CardMini = (product) => {
  return (
    <div className={"container-treatments"}>
      <div className={"card"} style={{ width: "18rem" }}>
        <img
          src={product.image}
          className={"card-img-top"}
          alt={"spa interiour"}
        />
        <div className={"card-body"}>
          <h4 className={"card-title"} style={{ fontWeight: "800" }}>
            {" "}
            {product.title}
          </h4>
          <p className={"card-text"}>{product.description} </p>
          <h5 style={{ fontWeight: "800", textAlign: "center" }}>
            {product.price}{" "}
          </h5>
          <button className={"btn-booking"}>Book now!</button>
        </div>
      </div>
    </div>
  );
};

export default CardMini;
