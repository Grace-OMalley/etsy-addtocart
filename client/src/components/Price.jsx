import React from 'react';

const Price = (props) => {
  if (props.item.inventoryCount > 0) {
    return (
      <div className="price">
        <div>
          <h2>${props.item.price}+</h2>
        </div>
        <div>
          <h5>✓  In Stock</h5>
        </div>
      </div>
    )
  } else {
    return (
      <div className="price">
        <div>
          <h2>${props.item.price}+</h2>
        </div>
        <div>
          <h5>Out of Stock</h5>
        </div>
      </div>
    )
  }
};

export default Price;