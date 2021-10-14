import React, { Component } from "react";
import Product from "./product";
class ShoppingCart extends Component {
  render() {
      const{onReset,onDelete,increment, products } = this.props;
    return (
      <React.Fragment>
        <h1>Shopping Cart</h1>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={onReset}
        >
          Reset
        </button>
        
        
        { products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={onDelete}
            increment={increment}
            
          />
        ))} 
        
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
