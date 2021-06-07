//@ts-check

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("car").del()
    .then(function () {
      // Inserts seed entries
      return knex("car").insert([
        {id: 1, odometer: 105000, model_id: 1, description: "This is a 2006 Mitsubishi VRX Outlander that has travelled 105000 kms. Powered by a 2.4 MIVEC engine with tiptronic automatic transmission, it gives you excellent fuel economy from a 4 cylinder engine, and on going assistance with the CVT transmission. Standard is the split tail gate giving you full rear access. And the clincher is the price. Call now for a test drive.", location_id: 3, engine: 2359, fuel: "petrol", transmission: "automatic", price: 6200, year: 2006, colour: "grey", seats: 5, owner_id: 3},
        {id: 2, odometer: 90000, model_id: 2, description: "Toyota Corolla Axio is a small-sized passenger car. It is convenient and easy to handle. Super economical. It's got enough space, and it is so quiet.", location_id: 1,engine: 1496, fuel: "hybrid", transmission: "automatic", price: 11400, year: 2015, colour: "red", seats: 5, owner_id: 2},
        {id: 3, odometer: 50000, model_id: 3, description: "In Excellent original condition. Holden Owner’s manual and documentation in original wallet. This example has had an older restoration and presents very well, painted in green metallic over vagabond green upholstery with all the premier luxuries for the 1960’s era, powered by a 138.0 cubic inches inline six-cylinder engine, producing 75 brake horsepower (56 kW) and Hydra-matic 3-speed automatic transmission as standard equipment.", location_id: 2, engine: 2262, fuel: "petrol", transmission: "automatic", price: 30000, year: 1962, colour: "green", seats: 5, owner_id: 1},
      ]);
    });
};
