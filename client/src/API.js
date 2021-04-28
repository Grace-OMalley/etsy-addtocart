const $ = require('jquery');

module.exports = {
  readAll: (callback) => {
    $.ajax({
      url: '/addtocart',
      type: 'GET',
      success: (data) => {
        console.log('SUCCESS AJAX REQ!');
        callback(data);
      },
      error: (error) => {
        console.log('AJAX REQ FAILED: ', error);
      }
    });
  }
}