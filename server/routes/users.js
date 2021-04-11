//@ts-check

const express = require("express");
const bcrypt = require('bcrypt');

const db = require("../db/users");
const router = express.Router()

router.post("/", (req, res) => {
  db.findUserByEmail(req.body.email)
    .then(result => {
      if (result !== null) {
        if (bcrypt.compareSync(req.body.password, result.password)) {
          res.json(true);
          return;
        }
      }
      res.json(false);
    })
});

module.exports = router
