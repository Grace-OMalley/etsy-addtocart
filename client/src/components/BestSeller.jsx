import React from 'react';
import BestSellerTip from './BestSellerTip.jsx';

const BestSeller = (props) => {
  if (props.item.numberOfSales >= 1000) {
    return (
      <div className="tooltip">
        <BestSellerTip />
        <input className="bestseller" type="button" value="Bestseller"/>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
};

export default BestSeller;