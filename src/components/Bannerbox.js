import React from "react";
import "../style/_main.scss";

const Bannerbox = ({ children, title, subtitle }) => {
  return (
    <div className="bannerbox">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Bannerbox;
