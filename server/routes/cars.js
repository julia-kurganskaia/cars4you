//@ts-check

const express = require('express')
const db = require('../db/cars')
const router = express.Router()

router.get("/", (req, res) => {
  db.getCars()
    .then(results => {
      res.json({ cars: results })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
});

module.exports = router
