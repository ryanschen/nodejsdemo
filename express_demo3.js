const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.send('Hello , world ~ Picture')
})

const server = app.listen(8081, function() {
    const host = server.address().address
    const port = server.address().port
    console.log('访问地址为： http://%s%s', host, port)
})