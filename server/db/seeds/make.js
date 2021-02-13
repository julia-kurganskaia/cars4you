//@ts-check

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("make").del()
      .then(function () {
        // Inserts seed entries
        return knex("make").insert([
          { id: 1, name: "Mitsubishi"},
          { id: 2, name: "Toyota"},
          { id: 3, name: "Holden"}
        ]);
      });
  };
