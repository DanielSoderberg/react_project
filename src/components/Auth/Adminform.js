import React, { Component } from "react";
import axios from "axios";

class Adminform extends Component {
  state = {
    image: " ",
  };
  eventChange(e) {
    console.log(e.target.files[0]);
    this.setState({ image: e.target.files[0] });
  }

  async onSubmitToApi(e) {
    e.preventDefault();

    //Hämta produktinfo, titel, pris mm i Strapi
    const res = await axios.post("http://localhost:1337/products", {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      price: e.target.elements.price.value,
    });
    console.log(res);

    const data = new FormData();

    data.append("files", this.state.image);
    data.append("ref", "product");
    data.append("refId", res.data.id);
    data.append("field", "image");

    //Hämta bilden
    const resPic = await axios.post("http://localhost:1337/upload", data);
    console.log(resPic);
  }

  render() {
    return (
      <div className="bookingcontainer">
        <h3>Form for handling content</h3>
        <form onSubmit={this.onSubmitToApi.bind(this)}>
          <input
            className="form-admin"
            type="text"
            name="title"
            placeholder="title"
          />
          <input
            className="form-admin"
            type="text"
            name="description"
            placeholder="description"
          />
          <input
            className="form-admin"
            type="number"
            name="price"
            placeholder="price"
          />

          <input
            className="form-admin"
            type="file"
            name="file"
            onChange={this.eventChange.bind(this)}
          />

          <button className="btn-booking">Add product</button>
        </form>
      </div>
    );
  }
}

export default Adminform;
