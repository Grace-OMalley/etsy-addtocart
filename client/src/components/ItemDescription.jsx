import React from 'react';

const ItemDescription = (props) => {
  if (props.toggle) {
    return (
      <div className="desc">
        <div className="descheader" onClick={() => props.descClick()}>
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
    )
  } else {
    return (
      <div className="desc">
        <div className="descheader" onClick={() => props.descClick()}>
          <h4>Description</h4>
          <img className="uparrowflip" src="arrowUp.png"></img>
        </div>
        <br/>
        <h6 className="desctexthide">{props.item.itemDescription}</h6>
        <br/>
        <div className="learnmorebox">
          <input className="learnmore" type="button" defaultValue="Learn more about this item" />
        </div>
      </div>
    )
  }
};

export default ItemDescription;