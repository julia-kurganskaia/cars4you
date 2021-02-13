//@ts-check

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("location").del()
      .then(function () {
        // Inserts seed entries
        return knex("location").insert([
          { id: 1, location: "Blenheim"},
          { id: 2, location: "Auckland"},
          { id: 3, location: "Wellington"}
        ]);
      });
  };
