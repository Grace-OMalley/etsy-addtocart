import React from 'react';

const ItemDescription = (props) => (
  <div className="desc">
    <h4>Description</h4>
    <h5>{props.item.itemDescription}</h5>
  </div>
);

export default ItemDescription;