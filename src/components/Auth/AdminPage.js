import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
import AdminLogin from "./AdminLogin";
import Logo from "../../images/logo2NY.png";

class AdminPage extends Component {
  state = {
    user: null || localStorage.getItem("user"),
    jwt: null,
  };

  callback(user, jwt) {
    this.setState({ user: user.email, jwt: jwt });
    localStorage.setItem("jwt", this.state.jwt);
    localStorage.setItem("user", this.state.user);
  }

  logOut() {
    // Kolla upp för VG utloggning på navbar
    localStorage.clear();
    window.location.reload(false);
  }

  render() {
    const loggedIn = this.state.user || localStorage.getItem("jwt");
    return (
      <div className="bookingcontainer">
        {!loggedIn ? (
          <div>
            <h4>Hey! You need to log in</h4>
            <AdminLogin userCredential={this.callback.bind(this)} />
            <div>
              <img className="biglogo" src={Logo} alt="Daniels SPA" />
            </div>
          </div>
        ) : (
          <div>
            <h4>Hey! You need to log in</h4>
            <AdminProfile userData={this.state.user} />
            <div>
              <img className="biglogo" src={Logo} alt="Daniels SPA" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdminPage;
