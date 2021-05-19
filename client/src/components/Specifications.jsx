import React from 'react';
import SpecificationsItem from './SpecificationsItem.jsx';

const Specifications = (props) => {
  let quantArray = [];
  for (let i = 1; i < props.item.inventoryCount; i++) {
    if (i < 1000) {
      quantArray.push(<option key={i}>{i}</option>);
    }
  }
  if (props.item.specifications) {
    return (
      <div>
        <h6 className="sizetext">Sizes</h6>
        <div className="specbox">
          <select className="specs" placeholder="Select an option">
            <option>Select an option</option>
            {props.item.specifications.map((size, index) => (
              <SpecificationsItem
                key={index}
                size={size[0]}
              />
            ))}
          </select>
        </div>
        <br/>
        <h6 className="quanttext">Quantity</h6>
        <div className="quantbox">
          <select className="quant">
            {quantArray}
          </select>
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Specifications;