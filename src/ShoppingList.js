import React, {Component} from 'react';
import GroceryItem from './GroceryItem'

class ShoppingList extends Component {

  render() {
    const listItems = this.props.groceries.map((grocery,index) =>(
      <GroceryItem key={grocery.name} grocery={grocery} onDelete= {()=> this.removeGrocery(index)}/>
    ))
    return(
      <ol className="ShoppingList">
        {listItems}
      </ol>

    )
  };
}

export default ShoppingList;
