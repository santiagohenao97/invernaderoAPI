const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/', (req, res) => {
     
  mysqlConnection.query('SELECT Id, registro, volumenSustrato FROM datos ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

module.exports = router;