//@ts-check

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("car").del()
    .then(function () {
      // Inserts seed entries
      return knex("car").insert([
        {id: 1, odometer: 105000, model_id: 1, description_id: 1, location_id: 3, engine: 2359, fuel: "petrol", transmission: "automatic", price: 6200, year: 2006, colour: "grey", seats: 5},
        {id: 2, odometer: 900000, model_id: 2, description_id: 2, location_id: 1,engine: 1496, fuel: "hybrid", transmission: "automatic", price: 11400, year: 2015, colour: "red", seats: 5},
        {id: 3, odometer: 50000, model_id: 3, description_id: 3, location_id: 2, engine: 2262, fuel: "petrol", transmission: "automatic", price: 30000, year: 1962, colour: "green", seats: 5},
      ]);
    });
};
