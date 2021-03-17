//@ts-check

exports.up = function(knex) {
  return knex.schema.createTable("description", table => {
      table.increments("id")
      table.string("about")
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("description")
};
