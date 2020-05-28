import React, { Component } from "react";
import axios from "axios";

class ProductList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get("http://localhost:1337/products").then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    });
  }
  //DELETE
  onClickDelete(e) {
    e.preventDefault();
    axios.delete("http://localhost:1337/products/:id");
  }

  //UPDATE
  onClickEdit(e) {
    e.preventDefault();
    axios.put("http://localhost:1337/products/:id");
  }

  render() {
    return (
      <div className="bookingcontainer">
        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>
              {product.title} {}
              {product.price},{product.id},
              <button
                className="btn-delete"
                onClick={this.onClickDelete.bind(this)}
              >
                {" "}
                x
              </button>
              <button
                className="btn-update"
                onClick={this.onClickEdit.bind(this)}
              >
                Edit product
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ProductList;
