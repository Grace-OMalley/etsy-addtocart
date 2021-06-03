const $ = require('jquery');

module.exports = {
  readAll: (callback) => {
    $.ajax({
      url: 'http://54.193.75.141:3000/addtocart',
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
      url: 'http://54.193.75.141:3000/addtocart/' + options,
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