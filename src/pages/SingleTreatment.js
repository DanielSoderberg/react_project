import React, { Component } from "react";
import CardMini from "../components/CardMini";
import axios from "axios";
import firebase from "../components/FirebaseConfig";


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

onClickSaveToFirestore(){
            
   const docRef=  firebase.firestore().collection("booking").doc(this.props.docId.toString());
     
    
   docRef.set({
       name: this.props.title,
       description: this.props.description,
       price: this.props.price

   })


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
