import React, {Component} from 'react';
import ShoppingList from './ShoppingList'
import ItemForm from './ItemForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          name: "Popcorn",
          price: 2,
          quantity: 1
        }, {
          name: "Salami",
          price: 3,
          quantity: 1

        }, {
          name: "Durian",
          price: 4,
          quantity: 1
        }
      ],
      total: 0
    }
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Grocery List</h1>
        <ShoppingList groceries={this.state.groceries}/>
        <ItemForm onSubmit={this.addGrocery.bind(this)}/>
      </header>
    </div>);
  }
  
  addGrocery(grocery) {
    this.setState(prevState => {
      const newGroceries = prevState.groceries.slice(0);
      newGroceries.push(grocery);
      return {groceries: newGroceries};
    })
  }

  removeGrocery(index) {
    this.setState(prevState => {
      const newGroceries = prevState.grocery.slice();
      newGroceries.splice(index, 1);
      return {groceries: newGroceries};
    });
  }
}

export default App;
