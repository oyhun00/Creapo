const express = require('express');

const router = express.Router();

const Database = require('../../DataBase');

const SELECT_POST = `SELECT * FROM CREAPO_POST`;

router.get('/', async (req, res) => {
  try {
    const rows = await Database.execute(
      (database) => database.query(
        SELECT_POST,
      )
    );

    res.json({
      success: true,
      code: 1,
      message: '메인 게시물 전체 조회',
      result: rows,
    });
  } catch (e) {
    console.log(e)
  }
})

module.exports = router;