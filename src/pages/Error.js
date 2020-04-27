import React from "react";
import Hero from "../components/Hero";
import Bannerbox from "../components/Bannerbox";
import { Link } from "react-router-dom";
import "../style/_main.scss";

const Error = () => {
  return (
    <Hero>
      <Bannerbox
        title="404"
        subtitle="Hey! You must have fucked up somehow.Page not found"
      >
        <Link to="/" className="btn-primary">
          Back home
        </Link>
      </Bannerbox>
    </Hero>
  );
};
export default Error;
