var moment = require('moment');


// 01011970 00.00.00 am

// var date = new Date();
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 12345;
var date = moment(createdAt);
console.log(date.format('MMM Do YYYY'));
