//@ts-check

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("model").del()
      .then(function () {
        // Inserts seed entries
        return knex("model").insert([
          { id: 1, make_id: 1, name: "Mitsubishi Outlander Vr-X"},
          { id: 2, make_id: 2, name: "Toyota Corolla Axio"},
          { id: 3, make_id: 3, name: "Holden EJ Premier"}
        ]);
      });
  };
