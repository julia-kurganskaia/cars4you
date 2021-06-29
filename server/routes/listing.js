//@ts-check

const express = require("express");

const { addListing, getCar } = require("../db/listing");
const { findUserByEmail } = require("../db/users");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "tmp/" });
const fs = require("fs");


router.post("/", upload.single("img"), (req, res) => {
  if (req.body.location_id === "" || req.body.year === "" || req.body.model_id === "" || req.body.colour === "" || req.body.seats === "" || req.body.odometer === "" || req.body.engine === "" || req.body.fuel === "" || req.body.transmission === "" || req.body.price === "" || req.file === undefined) {
    res.json(false);
    return;
  }

  findUserByEmail(req.session.email)
    .then(user => {
      if (req.file.originalname.endsWith(".jpg")) {
        return {
          model_id: Number(req.body.model_id),
          description: req.body.description,
          location_id: Number(req.body.location_id),
          odometer: req.body.odometer,
          engine: req.body.engine,
          fuel: req.body.fuel,
          transmission: req.body.transmission,
          price: req.body.price,
          year: req.body.year,
          colour: req.body.colour,
          seats: req.body.seats,
          owner_id: user.id,
        };
      } else {
        return Promise.reject(new Error("No image"));
      }
    })
    .then(newListing => {
      return addListing(newListing);
    })
    .then(id => {
      if (req.file !== undefined) {
        if (req.file.originalname.endsWith(".jpg")) {
          fs.rename(req.file.path, "server/public/listings-images/" + id + ".jpg", () => {})
        } else {
          fs.unlink(req.file.path, () => {})
        }
      }

      return getCar(id);
    })
    .then(car => {
      res.json(car)
    })
    .catch(err => {
      console.log(err);
      res.json(false);
    });
});

module.exports = router
