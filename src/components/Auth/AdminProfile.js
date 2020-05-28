import React, { Component } from "react";

class AdminProfile extends Component {
  render() {
    return (
      <div className="bookingcontainer">
        <h6>Profile info: {this.props.userData}</h6>

        <button onClick={this.onClickLogin.bind(this)}>Login</button>
      </div>
    );
  }
}

export default AdminProfile;
