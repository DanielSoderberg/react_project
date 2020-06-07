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
  onClickDelete(product) {
    axios.delete("http://localhost:1337/products/delete/:id");
     }
  
    
  

  //UPDATE
  onClickEdit(e) {
    e.preventDefault();
    axios.put("http://localhost:1337/products/update/:id").then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    });
  }
  render() {
    return (
      <div className="bookingcontainer">
        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>
              {product.title}
              {product.price},{product.id},
              <button
                className="btn-delete"
                onClick={this.onClickDelete(this.product)}
              >
                {" "}
                x
              </button>




              <button
                className="btn-edit"
                onClick={this.onClickEdit.bind(this)}
              >
                Edit 
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ProductList;
