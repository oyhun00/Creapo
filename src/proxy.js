const createProxyMiddleware = require('http-proxy-middleware');

module.exports = (server) => {
  server.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:3001/',
      changeOrigin: true,
    }),
  );
};
