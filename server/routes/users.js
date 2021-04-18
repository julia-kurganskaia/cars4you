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
          req.session.email = req.body.email;
          res.json({
            user_name: result.user_name,
          });

          return;
        }
      }
      res.json(false);
    })
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.json();
});

module.exports = router
