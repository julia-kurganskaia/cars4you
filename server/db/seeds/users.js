//@ts-check

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {id: 1, user_name: "John Snow", email: "snow@gmail.com", password: bcrypt.hashSync("12345", saltRounds)},
        {id: 2, user_name: "Moana Motunui", email: "moana@gmail.com", password: bcrypt.hashSync("moana", saltRounds)},
        {id: 3, user_name: "Lama Dama", email: "lama@gmail.com", password: bcrypt.hashSync("lamadama", saltRounds)}
      ]);
    });
};
