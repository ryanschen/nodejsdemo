const events = require('events')
//创建观察者对象Observer
const eventEmitter = new events.EventEmitter()
//创建事件处理程序
const connectHandler = function connected() {
    console.log('连接成功。')
    //触发 data_received事件
    eventEmitter.emit('data_received')
}

//绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler)

eventEmitter.on('data_received', function() {
    console.log('数据接收成功。')
})

eventEmitter.emit('connection')

console.log('程序执行完毕~')