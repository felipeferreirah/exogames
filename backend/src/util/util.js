const {format} = require('date-fns');

exports.convertDate = function (date) {
  let newDate = new Date(date.replace('th','').replace('\'','').replace('rd','').replace('st','').replace('nd',''));
  


  return format(newDate, 'dd/MM/yyyy');
}