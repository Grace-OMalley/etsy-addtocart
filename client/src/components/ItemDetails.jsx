import React from 'react';

const ItemDetails = (props) => (
  <div>
    <div className="detailheader">
      <h4>Highlights</h4>
      <img className="uparrow" src="arrowUp.png"></img>
    </div>
    <br/>
    <h6 className="detailtext">Materials: {props.item.itemDetails}</h6>
  </div>
);

export default ItemDetails;