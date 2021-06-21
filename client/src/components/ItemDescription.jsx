import React from 'react';

const ItemDescription = (props) => {
  if (props.toggle && props.expand) {
    return (
      <div className="desc">
        <div className="descheader" onClick={() => props.descClick()}>
          <h4>Description</h4>
          <img className="uparrow" src="arrowUp.png"></img>
        </div>
        <br/>
        <h6 className="desctextexpand">{props.item.itemDescription}</h6>
        <br/>
        <div className="lessbox">
          <input className="less" type="button" defaultValue="Less" onClick={() => props.expandClick()}/>
        </div>
      </div>
    )
  } else if (props.toggle) {
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
          <input className="learnmore" type="button" defaultValue="Learn more about this item" onClick={() => props.expandClick()}/>
        </div>
      </div>
    );
  } else if (!props.toggle) {
    return (
      <div className="desc">
        <div className="descheader" onClick={() => props.descClick()}>
          <h4>Description</h4>
          <img className="uparrowflip" src="arrowUp.png"></img>
        </div>
        <br />
        <h6 className="desctexthide">{props.item.itemDescription}</h6>
      </div>
    );
  }
};

export default ItemDescription;