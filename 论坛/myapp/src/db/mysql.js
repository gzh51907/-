/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-03 16:59:56
 * @LastEditTime: 2019-10-07 17:23:34
 * @LastEditors: Please set LastEditors
 */
const mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'luntan',
    multipleStatements: true
})

function query(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results)
        })
    })
}
module.exports = query;