import React, {Component} from 'react';

class ItemForm extends Component{

constructor(props){
  super(props);
  return(
    this.state = {
      name: "",
      price:""
    }
  );
}

render(){
  return(
    <form className="ItemForm" onSubmit={this.handleSubmit.bind(this)}>
<p>
    <label>Name</label>
                <input value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
</p>
            <p>
                <label>Price</label>
                <input type="number" value={this.state.price} onChange={this.handlePriceChange.bind(this)}/>
            </p>
            <p className="ItemForm__button-bar">
                <button type="submit">Add</button>
            </p>
        </form>

  );
}
handleNameChange(event) {
      this.setState({
          // We get the new input value from the event.
          name: event.target.value
      });
  }

  handlePriceChange(event) {
      this.setState({
          price: event.target.value
      });
  }

  handleSubmit(event) {
      // by default a form submission will refresh the page. preventDefault stops that from happening.
      event.preventDefault();
      // Call the function that App.js passes into the onSubmit attribute.
      // Pass it a new contact object.
      this.props.onSubmit({
          name: this.state.name,
          price: this.state.price,
      });
      // Clear the form by simply updating the state with empty form values.
      this.setState({
          name: "",
          price: "",
      })
  }
}

export default ItemForm;
