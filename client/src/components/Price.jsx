import React from 'react';

const Price = (props) => {
  if (props.item.inventoryCount > 0) {
    return (
      <div className="price">
        <h2>${props.item.price}+</h2>
        <h4>✓  In Stock</h4>
      </div>
    )
  } else {
    return (
      <div className="price">
        <span>
          <h2>${props.item.price}+</h2>
          <h4>Out of Stock</h4>
        </span>
      </div>
    )
  }
};

export default Price;