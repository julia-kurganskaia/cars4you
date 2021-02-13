//@ts-check

exports.up = function(knex) {
    return knex.schema.createTable("location", table => {
        table.increments("id")
        table.string("location")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("location");
};
