import React from 'react';

const ItemDetails = (props) => {
  if (props.toggle) {
    return (
      <div>
        <div className="detailheader" onClick={() => props.detailClick()}>
          <h4>Highlights</h4>
          <img className="uparrow" src="arrowUp.png"></img>
        </div>
        <br />
        <h6 className="detailtext">Materials: {props.item.itemDetails}</h6>
      </div>
    )
  } else {
    return (
      <div>
        <div className="detailheader" onClick={() => props.detailClick()}>
          <h4>Highlights</h4>
          <img className="uparrowflip" src="arrowUp.png"></img>
        </div>
        <br />
        <h6 className="detailtexthide">Materials: {props.item.itemDetails}</h6>
      </div>
    )
  }
};

export default ItemDetails;