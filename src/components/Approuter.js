import React from "react";
import { BrowserRouter as Browser, Route, Switch } from "react-router-dom";
import Booking from "../pages/Booking";
import Footer from "./Footer";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "./Navbar";
import Treatments from "../pages/Treatments";
import SingleTreatment from "../pages/SingleTreatment";

import "../style/_main.scss";
//import "bootstrap/dist/css/bootstrap.min.css";

const Approuter = () => {
  return (
    <Browser>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/Booking" component={Booking} exact></Route>
        <Route path="/Treatments" exact component={Treatments}></Route>
        <Route
          path="/SingleTreatment"
          exact
          component={SingleTreatment}
        ></Route>
        <Route component={Error} Route />
      </Switch>
      <Footer />
    </Browser>
  );
};

export default Approuter;
