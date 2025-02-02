//@ts-check

exports.up = function (knex) {
  return knex.schema.createTable("car", table => {
    table.increments("id")
    table.integer("model_id")
    table.string("description")
    table.integer("location_id")
    table.integer("odometer")
    table.integer("engine")
    table.string("fuel")
    table.string("transmission")
    table.integer("price")
    table.integer("year")
    table.string("colour")
    table.integer("seats")
    table.integer("owner_id")
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("car")
};
