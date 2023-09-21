// 引入 Express.js 和其他依赖
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // 设置端口号

// 配置路由和中间件
app.use(express.json()); // 使用 JSON 解析中间件
app.use(express.urlencoded({ extended: true })); // 使用表单解析中间件

// 配置静态文件目录
app.use(express.static('public'));

// 定义路由
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
