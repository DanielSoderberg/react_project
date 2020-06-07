import React, { Component } from "react";
import AdminPage from "./AdminPage";

class AdminProfile extends Component {

    logOut(){
        localStorage.clear();
        window.location.reload(false);
    }

  render() {
    return (
      <div className="bookingcontainer">
        <h6>Profile info: {this.props.userData}</h6>

        <button className="btn-login" onClick={this.onClickLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default AdminProfile;
