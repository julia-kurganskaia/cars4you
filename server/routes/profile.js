//@ts-check

const express = require("express");

const db = require("../db/users");
const router = express.Router();

router.get("/", (req, res) => {
    db.findUserByEmail(req.session.email)
        .then(result => {
            if (result !== null) {
                res.json(result);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something went wrong' })
        })
});

module.exports = router
