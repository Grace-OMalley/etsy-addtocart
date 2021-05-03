import React from 'react';

const ItemDescription = (props) => (
  <div className="desc">
    <div className="descheader">
      <h4>Description</h4>
      <img className="uparrow" src="arrowUp.png"></img>
    </div>
    <br/>
    <h6 className="desctext">{props.item.itemDescription}</h6>
    <br/>
    <div className="learnmorebox">
      <input className="learnmore" type="button" defaultValue="Learn more about this item" />
    </div>
  </div>
);

export default ItemDescription;