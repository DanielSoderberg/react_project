import React from "react";
import { BrowserRouter as Browser, Route, Switch } from "react-router-dom";
import Booking from "../pages/Booking";
import Footer from "./Footer";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "./Navbar";
import Treatments from "../pages/Treatments";
import SingleTreatment from "../pages/SingleTreatment";
import Login from "../pages/Login";
import "../style/_main.scss";
import AdminPage from "./Auth/AdminPage";
import AdminLogin from "./Auth/AdminLogin";
import Adminform from "./Auth/Adminform";
import FirebaseTest from "./FirebaseTest";
import UserLogin from "../components/Auth/AuthUser/UserLogin";
import UserProfile from "../components/Auth/AuthUser/UserProfile";
import UserPage from "../components/Auth/AuthUser/UserPage";
import Contact from "../components/Contact";
//import "bootstrap/dist/css/bootstrap.min.css";

const Approuter = () => {
  return (
    <Browser>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Booking" exact component={Booking}></Route>
        <Route path="/Treatments" exact component={Treatments}></Route>
        <Route path="/Login" exact component={Login}></Route>
        <Route path="/AdminLogin" exact component={AdminLogin}></Route>
        <Route path="/AdminProfile" exact component={AdminLogin}></Route>
        <Route path="/Adminform" exact component={Adminform}></Route>
        <Route path="/AdminPage" exact component={AdminPage}></Route>
        <Route path="/FirebaseTest" exact component={FirebaseTest}></Route>
        <Route path="/UserLogin" exact component={UserLogin}></Route>
        <Route path="/UserPage" exact component={UserPage}></Route>
        <Route path="/UserProfile" exact component={UserProfile}></Route>
        <Route path="/Contact" exact component={Contact}></Route>

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
