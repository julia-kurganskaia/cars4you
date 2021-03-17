//@ts-check

exports.up = function (knex) {
  return knex.schema.createTable("car", table => {
    table.increments("id")
    table.integer("model_id")
    table.integer("description_id")
    table.integer("location_id")
    table.integer("odometer")
    table.integer("engine")
    table.string("fuel")
    table.string("transmission")
    table.integer("price")
    table.integer("year")
    table.string("colour")
    table.integer("seats")
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("car")
};
