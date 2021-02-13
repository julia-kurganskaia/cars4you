//@ts-check

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("car").del()
    .then(function () {
      // Inserts seed entries
      return knex("car").insert([
        {id: 1, odometer: 105000, model_id: 1, engine: 2359, fuel: "petrol", transmission: "automatic", price: 6200, year: 2006, colour: "grey", seats: 5},
        {id: 2, odometer: 900000, model_id: 2, engine: 1496, fuel: "hybrid", transmission: "automatic", price: 11400, year: 2015, colour: "red", seats: 5},
        {id: 3, odometer: 1500000, model_id: 3, engine: 1496, fuel: "hybrid", transmission: "automatic", price: 40000, year: 1962, colour: "green", seats: 5}
      ]);
    });
};
