//@ts-check

const connection = require("./connection");

function addListing(newListing, db = connection) {
  return db("car")
    .insert(newListing)
    .then(id => id[0])
}

function getCar(id, db = connection) {
  return db("car")
    .select()
    .where("id", id)
    .then(car => car[0])
}

module.exports = {
    addListing,
    getCar,
}
