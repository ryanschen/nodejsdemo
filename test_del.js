const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'test'
})

connection.connect()

const delSql = 'DELETE FROM websites where id = 6'

connection.query(delSql, function(err, result) {
    if(err){
        console.log('[DELETE ERROR] - ', err.message)
    }

    console.log('------------DELETE-----------')
    console.log('DELETE affectedRows', result.affectedRows)
    console.log('------------------------------')
})

connection.end()