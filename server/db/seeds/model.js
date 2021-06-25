//@ts-check

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("model").del()
      .then(function () {
        // Inserts seed entries
        return knex("model").insert([
          {id: 1, name: "Mitsubishi",},
          {id: 2, name: "Toyota",},
          {id: 3, name: "Holden",},
          {id: 4, name: "Audi",},
          {id: 5, name: "BMW",},
          {id: 6, name: "Ford",},
          {id: 7, name: "Honda",},
          {id: 8, name: "Hyundai",},
          {id: 9, name: "Kia",},
          {id: 10, name: "Lexus",},
          {id: 11, name: "Mazda",},
          {id: 12, name: "Mercedes-Benz",},
          {id: 13, name: "Nissan",},
          {id: 14, name: "Peugeot",},
          {id: 15, name: "Renault",},
          {id: 16, name: "Škoda",},
          {id: 17, name: "Subaru",},
          {id: 18, name: "Suzuki",},
          {id: 19, name: "Volvo",},
          {id: 20, name: "Other",},
        ]);
      });
  };
