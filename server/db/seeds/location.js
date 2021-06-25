//@ts-check

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("location").del()
      .then(function () {
        // Inserts seed entries
        return knex("location").insert([
          {id: 1, location: "Blenheim",},
          {id: 2, location: "Auckland",},
          {id: 3, location: "Wellington",},
          {id: 4, location: "Christchurch",},
          {id: 5, location: "Dunedin",},
          {id: 6, location: "Gisborne",},
          {id: 7, location: "Hamilton",},
          {id: 8, location: "Napier",},
          {id: 9, location: "New Plymouth",},
          {id: 10, location: "Nelson",},
          {id: 11, location: "Rotorua",},
          {id: 12, location: "Taupo",},
          {id: 13, location: "Tauranga",},
          {id: 14, location: "Whanganui",},
          {id: 15, location: "Other",},
        ]);
      });
  };
