const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config/db-config.json');
const test = require('../DataBase');

// const connection = mysql.createConnection({
//   host: config.host,
//   port: config.port,
//   user: config.user,
//   password: config.password,
//   database: config.database,
// });

// connection.connect();

const q = "SELECT * FROM CREAPO_USER";

router.get('/', async (req, res) => {
  var result = await test("SELECT * FROM CREAPO_USER");
  console.log(result);
  res.send();
})

module.exports = router;