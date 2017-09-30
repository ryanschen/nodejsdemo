const express = require('express')
const app = express()

app.get('/', function(req, res) {
    console.log('主页 GET 请求')
    res.send('Hello World~~~')
})

app.post('/', function(req, res) {
    console.log('主页  POST  请求')
    res.send('Hello POST~~~')
})

app.get('/del_user', function(req, res) {
    console.log('/del_user 响应DELETE 请求')
    res.send('删除页面')
})

app.get('/list_user', function(req, res) {
    console.log('/list_user GET 请求')
    res.send('用户列表页面')
})

app.get('/ab*cd', function(req, res) {
    console.log('/ab*cd GET 请求')
    res.send('正则匹配')
})

const server = app.listen(8081, function() {
    const host = server.address().address
    const port = server.address().address

    console.log('应用实例， 访问地址 http://%s%s', host, port)
})