const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config/db-config.json');
const Database = require('../DataBase');

// const connection = mysql.createConnection({
//   host: config.host,
//   port: config.port,
//   user: config.user,
//   password: config.password,
//   database: config.database,
// });

// connection.connect();

const q = `SELECT * FROM CREAPO_USER WHERE ID = :ID`;

router.get('/', async (req, res) => {
  Database.execute(
    (database) => database.query(
      q,
      {
        ID: 1
      }
    )
    .then((rows) => {
      console.log(rows);
      res.json({
        success: true,
        code: 1,
        message: 'test',
        result: rows,
      });
    }),
  )
})

module.exports = router;