import React, { Component } from "react";
import axios from "axios";
import ProductList from "../ProductList";
import AdminProfile from "./AdminProfile";

class Adminform extends Component {
  state = {
  image: " ",
  

    
  };
  eventChange(e) {
    console.log(e.target.files[0]);
    this.setState({ image: e.target.files[0] });
  }

  //SPARA // HÄMTA data från Strapi
  async onSubmitToApi(e) {
    e.preventDefault();

    //Skicka produktinfo, titel, pris mm till Strapi
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

    //Skicka bilden
    const resPic = await axios.post("http://localhost:1337/upload", data);
    console.log(resPic);
  }


/*  //DELETE
  async onClickDelete(e) {
    e.preventDefault();
    const res = await axios.delete("http://localhost:1337/products/:id", {res.data.id});
  } */


  onClickDelete = async (e) => {
    e.preventDefault();
    try {
    const res = await axios.delete('http://localhost:1337/products/', {id: {id: 3 }})
    console.log(res);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}




  //UPDATE
  async onClickEdit(e) {
    e.preventDefault();
    const res = await axios.put("http://localhost:1337/products/put/:id");
  }




  render() {
    return (
      <div className="bookingcontainer">
      <h2>Welcome to the adminsection!</h2>
      
      <h6>Profile info: {this.props.userData}</h6>
        <div className="productlist">
          <h3>List of our products and services</h3>
          <ProductList />
        </div>
        <div className="adminform-wrapper">
          <h3>Form for handling services</h3>
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
      </div>
    );
  }
}

export default Adminform;
