import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "./FirebaseConfig";

class CardMini extends Component {
onClickSaveToFirestore(){
            
   const docRef = firebase.firestore().collection("booking").doc(this.props.docId.toString());
     
    
   docRef.set({
       name: this.props.title,
       description: this.props.description,
       price: this.props.price

   })


   } 

  render() {
    return (
      <div className={"container-treatments"}>
        <div className={"card"} style={{ width: "18rem" }}>
          <img
            src={this.props.image}
            className={"card-img-top"}
            alt={"spa interiour"}
          />
          <div className={"card-body"}>
            <h4 className={"card-title"} style={{ fontWeight: "800" }}>
              {" "}
              {this.props.title}
            </h4>
            <p className={"card-text"}>{this.props.description} </p>
            <h5 style={{ fontWeight: "800", textAlign: "center" }}>
              {this.props.price}{" "}
            </h5>
            <button
              onClick= {this.onClickSaveToFirestore.bind(this)}
              className={"btn-booking"}
            >
              Book now!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardMini;
