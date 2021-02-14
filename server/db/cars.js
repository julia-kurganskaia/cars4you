const connection = require('./connection')

function getCars (db = connection) {
  return db("car").select()
}

module.exports = {
  getCars
}
