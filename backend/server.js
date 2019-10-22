const server = require('./app');
let port = 3030;
server.listen(port, () => {
  console.log('Server running at port ',port);
})