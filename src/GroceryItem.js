import React, {Component} from 'react';

class GroceryItem extends Component {
render(){
  return (
    <li>
      <div>{this.props.grocery.name}</div><div>{this.props.grocery.price}</div>
    </li>
  )
};
}
export default GroceryItem;
