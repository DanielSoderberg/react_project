import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import "../style/_main.scss";
import Hero from "../components/Hero";

import Bannerbox from "../components/Bannerbox";

const Home = () => {
  return (
    <div>
      <Hero>
        <Bannerbox
          title="Relaxing treatments"
          subtitle="Become a Better Person From Only $50"
        >
          <Link to="/Treatments" className="btn-main">
            Our treatments
          </Link>
        </Bannerbox>
      </Hero>
      <div>
        <About />
      </div>
    </div>
  );
};

export default Home;
