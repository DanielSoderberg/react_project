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
            docId={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={"http://localhost:1337" + product.image.url}
          />
        ))}
      </div>
    );
  }
}
export default SingleTreatment;
