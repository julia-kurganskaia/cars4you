//@ts-check

const express = require("express");

const db = require("../db/users");

const router = express.Router()

router.get("/", (req, res) => {
    db.getUsers()
      .then(results => {
        res.json({ users: results })
        return null
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong' })
      })
  });

  module.exports = router
