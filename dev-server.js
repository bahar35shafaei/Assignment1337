const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

const app = express();

app.use(
  createProxyMiddleware({
    target: 'https://api.1337co.de',
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('origin', 'http://localhost:3000/');
    },
    onProxyRes: (proxyRes, req, res) => {
      proxyRes.headers['access-control-allow-methods'] = '*';
      proxyRes.headers['access-control-allow-headers'] = '*';
      proxyRes.headers['access-control-allow-origin'] = '*';
    },
  }),
);

app.listen(4000, () => console.log('DEV SERVER STARTED'));
