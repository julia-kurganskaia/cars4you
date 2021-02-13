
//@ts-check

exports.up = function(knex) {
  return knex.schema.createTable("make", table => {
    table.increments("id")
    table.string("name")
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("make");
};
