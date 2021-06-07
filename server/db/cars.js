//@ts-check

const connection = require('./connection')

function getCars (db = connection) {
  return db("car")
  .join("location", "location.id", "car.location_id")
  .join("model", "model.id", "car.model_id")
  .join("make", "make.id", "model.make_id")
  .join("users", "users.id", "car.owner_id")
  .select("*", "car.id AS id", "make.name AS make_name")
}

module.exports = {
  getCars
}
