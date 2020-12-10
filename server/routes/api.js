const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config/db-config.json');

const connection = mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
});


router.get('/', (req, res) => {
  connection.connect(() => {
    connection.query("SELECT * FROM CREAPO_USER", (err, rows, field) => {
      console.log(rows);
    })
  })
  console.log('success');
  res.send();
})

module.exports = router;