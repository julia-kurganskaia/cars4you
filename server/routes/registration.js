//@ts-check

const express = require("express");
const bcrypt = require('bcrypt');

const { registerUser, getUser} = require("../db/users");
const router = express.Router()

router.post("/", (req, res) => {
  if(req.body.name === "" || req.body.email === "" || req.body.password === "") {
    return res.json(false);
  }
  bcrypt.hash(req.body.password, 10)
    .then(passHash => {
      return registerUser(req.body.name, req.body.email, passHash);
    })
    .then(id => {
      return getUser(id);
    })
    .then(user => {
      return res.json(user);
    })
});

module.exports = router
