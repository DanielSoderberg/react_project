import React, { Component } from "react";
import "../style/_main.scss";

class Formular extends Component {
  state = { dataFromUser: " " };

  onSubmitForm(e) {
    e.preventDefault();
    console.log(e.target.elements.test.value);
    //console.log(e.target.elements.test2.value)

    this.setState({ dataFromUser: e.target.elements.test.value });

    localStorage.setItem("valueFromForm", this.state.dataFromUser);
  }

  //On change vid eventuella uppdateringar
  onChangeInput(e) {
    console.log(e.target.value);

    this.setState({ dataFromUser: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm.bind(this)}>
          <input type="text" name={"test"}></input>
          {/*   <input type="text" name={"test2"}></input> */}
          <button> Submit</button>
        </form>

        <div> {this.state.dataFromUser}</div>
      </div>
    );
  }
}

export default Formular;
