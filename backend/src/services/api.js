const request = require('request');


async function getData() {
  await request('http://randomuser.me/api/', {
    json: true
  }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log(body.url);
    console.log(body.explanation);
  });
}


module.exports = getData;