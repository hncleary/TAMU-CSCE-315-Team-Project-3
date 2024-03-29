const http = require('http');
const googleTrends = require('google-trends-api');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World');
  //console.log('football');
});

server.listen(port, hostname, () => {
  console.log('Server started on port ' + port);
});

googleTrends.interestOverTime({keyword: 'football'})
.then(function(results){
  //const obj = JSON.parse(results);
  console.log(results);
})
.catch(function(err){
  console.error(err);
});
