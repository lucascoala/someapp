
exports.up = function(knex, Promise) {
return knex.schema.createTable('employee', (table) => {
    table.increments('id').unsigned().primary();
    table.string('first_name').notNull();
    table.string('last_name');
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employee');
};
