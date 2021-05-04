import React from 'react';
import SpecificationsItem from './SpecificationsItem.jsx';

const Specifications = (props) => {
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
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
};

export default Specifications;