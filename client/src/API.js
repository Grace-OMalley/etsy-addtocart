const $ = require('jquery');

module.exports = {
  readAll: (callback) => {
    $.ajax({
      url: '/addtocart',
      type: 'GET',
      crossDomain: true,
      success: (data) => {
        console.log('SUCCESS AJAX REQ!');
        callback(data);
      },
      error: (error) => {
        console.log('AJAX REQ FAILED: ', error);
      }
    });
  },
  readOne: (options, callback) => {
    $.ajax({
      url: '/addtocart/' + options,
      type: 'GET',
      crossDomain: true,
      success: (data) => {
        console.log('SUCCESS AJAX REQ!');
        callback(data);
      },
      error: (error) => {
        console.log('AJAX REQ FAILED: ', error);
      }
    });
  }
};