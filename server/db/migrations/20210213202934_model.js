//@ts-check

exports.up = function(knex) {
  return knex.schema.createTable("model", table => {
    table.increments("id")
    table.integer("make_id")
    table.string("name")
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable("model");
};
