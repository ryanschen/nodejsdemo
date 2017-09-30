const mysql = require('mysql')
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    port     : '3306',
    database : 'test'
})

connection.connect()

var updateSql = 'UPDATE websites SET name = ?,url = ? WHERE ID = ?'
var updateParams = ['菜鸟移动站', 'http://m.runoob.com', 6]
//改
connection.query(updateSql, updateParams, function(err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ', err.message)
        return
    }
    console.log('--------UPDATE------------------')
    console.log('UPDATE affectedRows', result.affectedRows)
    console.log('-------------------------------\n\n')
})

connection.end()