const mysql = require('mysql');
const config = require('./config/db-config');

class Database {
  constructor() {
    this.connection = mysql.createConnection(config);
    this.connection.config.queryFormat = (query, values) => {
      if (!values) return query;
      return query.replace(/:(\w+)/g, (txt, key) => {
        if (Object.prototype.hasOwnProperty.call(values, key)) {
          return values[key];
        }
        return txt;
      });
    };
  }

  async query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) {
          // 트랜잭션 중 에러가 났을때 처리.
          console.log(err.message);

          // Database 에서 보여주는 에러 메시지
          if (err.sqlMessage) {
            // console.log(err.sqlMessage);
          }

          // 실행된 sql
          if (err.sql) {
            console.log(err.sql);
          }

          reject(err);
        }
        resolve(rows);
      });
    });
  }

  execute(callback) {
    return callback(this).then(
      (result) => result,
      (err) => { throw err; },
    );
  }
}

module.exports = new Database();
