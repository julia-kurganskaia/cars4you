//@ts-check

const express = require("express");

const { addListing, getCar } = require("../db/listing");
const router = express.Router();

router.post("/", (req, res) => {
    if (req.body.location_id === "" || req.body.year === "" || req.body.model_id === "" || req.body.colour === "" || req.body.seats === "" || req.body.odometer === "" || req.body.engineType === "" || req.body.fuelType === "" || req.body.transmission === "" || req.body.price === "") {
    res.json(false);
    return;
  }

  const newListing = {
    model_id: req.body.model_id,
    description: req.body.description,
    location_id: req.body.location_id,
    odometer: req.body.odometer,
    engine: req.body.engine,
    fuel: req.body.fuel,
    transmission: req.body.transmission,
    price: req.body.price,
    year: req.body.year,
    colour: req.body.colour,
    seats: req.body.seats,
    owner_id: req.body.user_id,
  };

  return addListing(newListing)
    .then(id => {
      return getCar(id);
    })
    .then(car => {
      res.json(car)
    })
    .catch(err => {
      console.log(err);
      res.json(false);
    })
});

module.exports = router
