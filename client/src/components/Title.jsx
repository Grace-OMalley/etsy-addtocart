import React from 'react';

const Title = (props) => {
  let starArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.item.reviewAvg) {
      starArray.push(<svg key={i} className="solidstar" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg>);
    } else {
      starArray.push(<svg key={i} className="hollowstar" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M12,6.47l1.21,2.84.41,1,1.05.09,3.07.27-2.32,2-.8.69.24,1,.69,3L12.9,15.79l-.9-.53-.9.53L8.45,17.38l.69-3,.24-1-.8-.69-2.32-2,3.07-.27,1.05-.09.41-1L12,6.47m.46-3.39h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4-.28-.88-6-.52L12.46,3.08Z"></path></svg>);
    }
  }
  if (props.item.numberOfSales && props.item.brandName) {
    let count = 0;
    let numberSales = [];
    let numArray = props.item.numberOfSales.toString().split('');
    for (var i = numArray.length - 1; i >= 0; i--) {
      count++;
      numberSales.unshift(numArray[i]);
      if (count === 3) {
        numberSales.unshift(',');
        count = 0;
      }
    }
    let sales = numberSales.join('');
    return (
      <div>
        <h4 className="title">{props.item.brandName}</h4>
        <span className="salestotal">{sales} sales | </span>
        <span className="reviewstars">{starArray}</span>
        <br />
        <br />
        <h1>{props.item.itemName}</h1>
      </div>
    );
  } else {
    return (
      <div>Loading...</div>
    );
  }
};

export default Title;