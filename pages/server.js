const express = require('express');
const next = require('next');
const path = require('path');
const compression = require('compression'); // import the compression package

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files with caching headers
  server.use('/static', express.static(path.join(__dirname, 'static'), {
    maxAge: dev ? '0' : '365d',
    immutable: true
  }));

  // Compress static files with gzip
  server.use(compression());

  // Serve Next.js pages
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

// Set a cache lifetime of 1 year for static assets
const staticAssetCacheControl = (req, res, next) => {
  if (req.url.match(/\.(jpg|jpeg|png|gif|css|js)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000')
  }
  next()
}

// Use the cache control middleware for static assets
app.use(staticAssetCacheControl)

// Serve static files from the public directory
app.use(express.static('public'))

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000')
})
