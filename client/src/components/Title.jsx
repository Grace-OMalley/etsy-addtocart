import React from 'react';

const Title = (props) => (
  <div>
    <h4>{props.item.brandName}</h4>
    <span>{props.item.numberOfSales} {props.item.reviewAvg}/5</span>
    <h2>{props.item.itemName}</h2>
  </div>
);

export default Title;