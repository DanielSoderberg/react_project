class Eventtest extends Component {
  
  state = { }
    onClickCount() {
    this.setState({ count: this.state.count + 1 });
  }

onClickMinusCount(){
        this.setState({count: this.state.count -1})
    }
             <button onClick={this.onClickMinusCount.bind(this)}>Count</button> 


  render() {
    return (
      <div>
        <button>Count</button>
      </div>
    );
  }
}

///Get value from localstorage
<div>
  <h3>My bookings</h3>
  <p>List and details of my bookings</p>
  {localStorage.getItem("valueFromForm")}
</div>