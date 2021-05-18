//@ts-check

const express = require("express");

const { registerUser, getUser} = require("../db/users");
const router = express.Router()

router.post("/", (req, res) => {
    registerUser(req.body.name, req.body.email, req.body.password)
        .then(id => {
            getUser(id)
                .then(user => {
                  console.log(user)
                  res.json(user)
                })
        });
});

module.exports = router
