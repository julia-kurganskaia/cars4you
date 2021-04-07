//@ts-check

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {id: 1, user_name: "John Snow", email: "snow@gmail.com", password: "12345"},
        {id: 2, user_name: "Moana Motunui", email: "moana@gmail.com", password: "moana"},
        {id: 3, user_name: "Lama Dama", email: "lama@gmail.com", password: "lamadama"}
      ]);
    });
};
