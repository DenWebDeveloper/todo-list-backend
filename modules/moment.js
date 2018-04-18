const moment = require('moment');

const  dateTo = moment('2018-05-18T09:00:00.000Z');
console.log('Difference is ',dateTo.diff(new Date()),'milliseconds');

