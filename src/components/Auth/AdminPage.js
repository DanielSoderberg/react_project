import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
import AdminLogin from "./AdminLogin";
import Adminform from "./Adminform";

class AdminPage extends Component {
  state = {
    user: null || localStorage.getItem("user"),
    jwt: null,
  };
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
            <AdminLogin
              userCredential={(e, jwt) => {
                this.setState({ user: e.email, jwt: jwt });
                localStorage.setItem("jwt", this.state.jwt);
                localStorage.setItem("user", this.state.user);
              }}
            />
          </div>
        ) : (
          <div className="bookingcontainer">
            <h2>Welcome to Daniels Spa</h2>
            <h6>
              <AdminProfile userData={this.state.user} />
            </h6>

            <Adminform />
          </div>
        )}
      </div>
    );
  }
}

export default AdminPage;
