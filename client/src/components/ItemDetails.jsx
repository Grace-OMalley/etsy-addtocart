import React from 'react';

const ItemDetails = (props) => (
  <div>
    <h4>Highlights</h4>
    <h5>Materials: {props.item.itemDetails}</h5>
  </div>
);

export default ItemDetails;