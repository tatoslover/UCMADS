const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

// MIME types for different file extensions
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

// Create the server
const server = http.createServer((req, res) => {
  // Handle GET requests
  if (req.method === 'GET') {
    // Get the request URL path
    let filePath = req.url;

    // Default to index.html for root path
    if (filePath === '/') {
      filePath = '/index.html';
    }

    // Construct the absolute file path
    const fullPath = path.join(__dirname, filePath);

    // Get the file extension
    const ext = path.extname(fullPath);

    // Read the file
    fs.readFile(fullPath, (err, data) => {
      if (err) {
        // If file not found, return 404
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          return;
        }

        // For other errors, return 500
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }

      // File found, set the correct content type and send the file
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  } else {
    // Handle other HTTP methods
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('Press Ctrl+C to stop the server');
});
