const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
  app.use(
    createProxyMiddleware('/post',
      {target:'http://localhost:5000/api',
      changeOrigin:true,
    }
    )
  )
}