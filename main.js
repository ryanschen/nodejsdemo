const fs = require('fs')

fs.readFile('test.txt', function(err, data){
    if(err) throw err
    console.log(data.toString())
})
console.log(__filename)
console.log(__dirname)
console.log('程序执行结束！')