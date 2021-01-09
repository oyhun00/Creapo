const express = require('express');

const router = express.Router();

const Database = require('../../DataBase');

const SELECT_POST = `SELECT * FROM CREAPO_POST`;

router.get('/', async (req, res) => {
  console.log('11');
  const { rows } = await Database.execute(
    (database) => database.query(
      SELECT_POST,
    )
  );

  res.json({
    success: true,
    code: 1,
    message: 'test',
    result: rows,
  });

  // Database.execute(
  //   (database) => database.query(
  //     SELECT_POST,
  //   )
  //   .then((rows) => {
  //     console.log(rows);
  //     res.json({
  //       success: true,
  //       code: 1,
  //       message: 'test',
  //       result: rows,
  //     });
  //   }),
  // )
})

module.exports = router;