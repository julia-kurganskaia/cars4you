//@ts-check

const db = require("./connection");

function findUserByEmail(email) {
  return db("users")
    .where("email", email)
    .then(result => {
      if (result.length !== 0) {
        return result[0];
      }
      return null;
    })
};

module.exports = {
  findUserByEmail,
};
