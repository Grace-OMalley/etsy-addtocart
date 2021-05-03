import React from 'react';

const ItemDescription = (props) => (
  <div className="desc">
    <div className="descheader">
      <h4>Description</h4>
      <img className="uparrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADm5uZOTk7k5OTo6OhRUVFLS0tISEhUVFRGRkbr6+sjIyPu7u57e3sSEhLd3d3ExMRiYmJBQUE1NTX29vatra1ra2uGhoYYGBgLCwuhoaFcXFyTk5PIyMhnZ2e3t7dNLf0BAAADxUlEQVR4nO3d61LiQBAF4KCCKCKCKKysl/d/Srdl4yRMpjOTzKU7db6fkCpz6mS6sazCqgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAh5fXw3K/PLy+lL6RVI6z2rH0rSSx+jMzHtalbye+q1nbvPQNxTafXZpYRDvgxCJ2BZxUxO6AE4p4OWQmF9HVIFmVvrkY3A1OpMUVG3ACLfINTqBF7gxOIqJPQNUR/QIqjugbUG3E/iFjXJW+2SH8GyQKl0ZIgypb7Fv0NmVnMbRBdS2GnUGFLQ5pUFXEYQ0qisgGvKsW6iOyj+jdvwvYiArGDdvg9c8l19wl4ld/b4NEc4tsg7e/l91yl4k+i14NEq0tepzBGnsWxbbo3SDRuDTYgAvrcn0R2UfUDqgvYtAjeqZr3AQMGUPT6h/QINHToueit2lZ/YFTtElHi4POYE3D6h/RIJHf4siA8iMGL3qb7NU/ukEiucVRQ8aQO26iNEiktjh40duWIluM1iCR2CIb0P8M1uR9gIvaIGHHTYEWoweUFjFBQFlL4yZFQEktRlr0NinjJlGDRMbSiLjobRJWf8IGSfkWIy96W+mzmGRNtJWdqBkClo2YJWDJ1Z94yBilWky26G1lxk22Bgm7NG4i/7D/ki56W/7Vn7VBkrvF5Ivexp7F6OMm05poyzlRiwTMGbFQwHwRsw8Zg40YbdxkXPS2HKu/YIMk/dJgG1zG+Ak9Uq/+wg2StC2yUzT+R7VuKVc/22DqIWOkWxpCAqaLWOCzqEuaiGIaJClWv4ghY8Rf/QLWRFvspcE2mGPR2+6jtiiuQRLzLAo7gzX2A1zQRBU1RZtitSg2YM9E9Y4oaNHbYnxGFdwgGf+gCh0yxthxI3JNtI1rUeCit7Grv6dFBQ2S4S2KP4O1oWdR+BRtGtaiooDDVr/oRW8LX/2qGiShD6qaIWOEjRsla6ItpEUVi97mv/pVNkh8W2QDyjyDNb+zqG6KNvm0qGwPXvLYi2+qA/IR3+iCR+UB+Qf1sarWzNuyh4zBjZt1dXK/KXlNtDEtnqq/zvfuS993APfq/6w2rrd0nMGas8WHyvWO3I9q3Zxn0dWhrgaJo8WN469yWqZoU/deXFTvUwnoiPhePU3iET3relCfuv54rG3IGPa4oe/Gsb4tVmuDxGrx5//ZbNuvaVr0tovVvz2/+tF87VD2Dkf7bIb5qF9d7eqXNl8Fby6Or9/fBnfNL9Oan3bP+8VxW+y+YtoeF/vn3UnYl4UBAAAAAAAAAAAAAAAAAAAAAAAAAAAA+PkGwv4jmWw9HzQAAAAASUVORK5CYII="></img>
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