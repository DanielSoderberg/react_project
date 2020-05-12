import React, { Component } from "react";
import CardMini from "../components/CardMini";
import axios from "axios";

class SingleTreatment extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    // async await
    const res = await axios.get("http://localhost:1337/products");
    console.log(res.data);
    this.setState({ products: res.data });
  }

  render() {
    return (
      <div className="container-treatments">
        {this.state.products.map((product) => (
          <CardMini
            key={product.id}
            image={"http://localhost:1337" + product.image.url}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    );
  }
}
export default SingleTreatment;
