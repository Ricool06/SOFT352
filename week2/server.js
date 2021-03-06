const http = require('http');
const url = require('url');

http.createServer(function(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');

  let parsedUrl = url.parse(request.url, true);
  let color = parsedUrl.pathname.substr(1).toLowerCase();
  let validColors = ['red', 'green', 'blue'];
  let responseBody;

  if (validColors.indexOf(color) != -1) {
    responseBody = {color: parsedUrl.pathname.substr(1), time: Date.now()};
    response.statusCode = 200;
  } else {
    responseBody = 'Only use red, blue, or green.';
    response.statusCode = 400;
  }

  response.end(JSON.stringify(responseBody));
}).listen(8080);