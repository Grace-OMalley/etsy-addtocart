import React from 'react';
import moment from 'moment';
import ShipByInfo from './ShipByInfo.jsx';

const ArrivesBy = (props) => {
  let timestamp = moment(Date.now()).add(6, 'days').format('MMM Do YY').slice(0, -5);
  let timestampRange = Number(timestamp.slice(-2)) + 3;
  return (
    <div className="shipbox">
      <img className="img" src="https://www.pngitem.com/pimgs/m/483-4838442_truck-icon-truck-vector-png-transparent-png.png"></img>
      <h6 className="shiptext"><b>Arrives by <div className="shiptime"><u className="timetest">{timestamp}-{timestampRange}</u><ShipByInfo /></div></b> if you order today.<br /><b>Hooray!</b> This item ships free to the US.</h6>
    </div>
  );
};

export default ArrivesBy;