const server = require('./server2')
const router = require('./router')

server.start(router.route)