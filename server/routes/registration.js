//@ts-check

const express = require("express");
const bcrypt = require('bcrypt');

const { registerUser, getUser} = require("../db/users");
const router = express.Router()

router.post("/", (req, res) => {
  if(req.body.name === "" || req.body.email === "" || req.body.password === "") {
    res.json(false);
    return;
  }
  bcrypt.hash(req.body.password, 10)
    .then(passHash => {
      return registerUser(req.body.name, req.body.email, passHash);
    })
    .then(id => {
      return getUser(id);
    })
    .then(user => {
      res.json({id: user.id, user_name: user.user_name, email: user.email});
    })
    .catch(err => {
      console.log(err);
      res.json(false);
    })
});

module.exports = router
