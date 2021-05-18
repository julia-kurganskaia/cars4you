//@ts-check

const connection = require("./connection");
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

function registerUser(name, email, password, db = connection) {
  return db("users")
    .insert({
      user_name: name,
      email: email,
      password: password,
    })
    .then(id => id[0])
}

function getUser(id, db = connection) {
  return db("users")
    .select()
    .where("id", id)
    .then(user => user[0])
};

module.exports = {
  findUserByEmail,
  registerUser,
  getUser,
};
