//@ts-check

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("model").del()
      .then(function () {
        // Inserts seed entries
        return knex("model").insert([
          { id: 1, make_id: 1, name: "2006 Mitsubishi Outlander Vr-X"},
          { id: 2, make_id: 2, name: "2015 Toyota Corolla Axio"},
          { id: 3, make_id: 3, name: "1962 Holden Other EJ Premier"}
        ]);
      });
  };
