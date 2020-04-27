import React from "react";
import { Route, Switch } from "react-router-dom";
import Card from "./Card";
import Form from "./Form";
import Main from "./Main";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../style/_main.scss";
//import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Browser>
        <Navbar />
        <Switch>
          <Route path="/Bookings" component={Booking} exact />
          <Route path="/Form" exact component={Formular} />
          <Route path="/Card" exact component={Card} />
        </Switch>
      </Browser>
    </div>
  );
};

export default App;
