
exports.up = function(knex, Promise) {
  return knex.schema.createTable('descriptions', (table) => {
    table.increments();
    table.string('product_name', 255).notNullable();
    table.integer('product_id').notNullable();
    table.specificType('features', knex.raw('text[]')).notNullable();
    table.specificType('tech_specs', knex.raw('text[]')).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.comment('Product descriptions')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('descriptions');
};
