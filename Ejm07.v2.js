const http = require('http');

const server = http.createServer((req, res) => {
  let statusCode = 200;
  let contentType = 'text/plain';
  let responseText = '';

  if (req.url === '/home') {
    responseText = 'Welcome to the home page!';
  } else if (req.url === '/about') {
    responseText = 'About us page.\n';
  } else {
    statusCode = 404;
    responseText = 'Page not found!';
  }

  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(responseText);
});

// Listening for the 'request' event
server.on('request', (req, res) => {
  console.log(`Request received for URL: ${req.url}`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
