const http = require('http');
const url = require('url');

http.createServer(function(request, response) {
  let parsedUrl = url.parse(request.url, true);

  console.log(parsedUrl.query);

  response.end(
    '<p style=color:'
    + parsedUrl.pathname.substr(1)
    + '>'
    + parsedUrl.pathname
    + ' params: '
    + JSON.stringify(parsedUrl.query)
    + '</p>'
  );
}).listen(8080);